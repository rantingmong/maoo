import admin from 'firebase-admin'
import config from './buslo-collective-firebase-adminsdk-a83ac-ccd3c671eb.json'

admin.initializeApp({
  credential: admin.credential.cert(config)
})

export const auth = admin.auth()
