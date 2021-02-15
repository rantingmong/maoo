import * as functions from 'firebase-functions'
import * as admin     from 'firebase-admin'

import axios from "axios"
import cryptoRandomString = require("crypto-random-string");

const app = admin.initializeApp()

axios.defaults.headers = {
  'Content-Type'          : 'application/json',
  'x-hasura-admin-secret' : 'adminsecret'
}

export const validateUser = functions.https.onRequest(async (req, res) => {

  console.log(req.rawHeaders)

  const firebase_auth_token = req.header("x-auth-token")
  const firebase_user_id    = req.header('x-auth-user')

  if (firebase_auth_token == null) {
    console.log('no auth token found, assuming public!')
    res.status(200).json({ 'x-hasura-role':'public' })
    return
  }

  console.log('verifying token...')

  try {

    const user = await admin
      .auth           ()
      .verifyIdToken  (firebase_auth_token)

    if (user.uid != firebase_user_id) {

      console.log(`invalid token! ${user.uid} == ${firebase_user_id}`)

      res.status(401).send()
      return
    }

    console.log('token validated')

    res.status(200).json({
      'x-hasura-user-id': firebase_user_id,
      'x-hasura-role'   : 'user'
    })
  } catch (error) {
    functions.logger.error(error)
    res.status(401).json(error)
  }
})

export const createUser   = functions.auth.user().onCreate(async user => {

  const query = `
    mutation create {
      create_user(object: { id: "${user.uid}", email: "${user.email}", name_user: "${cryptoRandomString({length:32})}" }) {
        id
        created_at
      }
    }`

  try {

    const payload   = {
      query           ,
      operationName   : 'create'
    }

    const {data}    = await axios.request({
      method  : "POST",
      url     : 'http://172.18.0.3:8080/v1/graphql',
      data    : JSON.stringify(payload)
    })

    functions.logger.info(data)

    await app.auth().setCustomUserClaims(user.uid, {role: 'user'})
  } catch (error) {
    functions.logger.error(error)
  }
})
