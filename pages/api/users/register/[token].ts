import { NextApiRequest, NextApiResponse } from 'next'
import { generate } from 'randomstring'
import cookie from 'cookie'
import cors from 'cors'

import { sdk } from '@logic/remote/graphql'

import withMethod from '@logic/util/hook/withMethod'
import withMiddleware from '@logic/util/hook/withMiddleware'
import { auth } from '@logic/firebase-server'

const age = 60 * 60 * 24 * 5
const age_milli = age * 1000

export default (req: NextApiRequest, res: NextApiResponse) => withMethod(['POST'], req, res, async () => {

  await withMiddleware(req, res, cors({ methods: ['POST'] }))

  const token = <string>req.query.token

  // step 1: user is already created, let's fill in the details for the database:
  const uinfo = await auth.verifyIdToken(token)

  if (!(new Date().getTime() / 1000 - uinfo.auth_time < 10 * 60)) {
    res.status(401).json({ result: 'window is too long to be validated.' })
    return
  }

  // step 2: create the profile in our db
  const step = await sdk.CreateUser({ email: uinfo.email, name_user: generate(32), uid: uinfo.uid })

  // step 3: let's login the user too!
  const login = await auth.createSessionCookie(token, { expiresIn: age_milli })

  res.setHeader('Set-Cookie', cookie.serialize('user', login, {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    path: '/',
    expires: new Date(Date.now() + age_milli),
    maxAge: age
  }))
  res.status(200).json({ result: true })
})
