import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey            : "AIzaSyBDeQb6IRiMvhbCevj--Qzw3F6MZXGeWDA",
  authDomain        : "buslo-collective.firebaseapp.com",
  projectId         : "buslo-collective",
  storageBucket     : "buslo-collective.appspot.com",
  messagingSenderId : "320396981629",
  appId             : "1:320396981629:web:c212680631145acab4c814"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firebase_auth = firebase.auth()

if (process.env.NODE_ENV == 'development') {
  console.log('using emulated auth')
  firebase_auth.useEmulator('http://localhost:29099')
}

firebase_auth.setPersistence(firebase.auth.Auth.Persistence.NONE)

export const auth = firebase_auth
