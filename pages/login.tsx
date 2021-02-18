import React, {useState} from "react"
import Head from "next/head"

import {auth} from "../logic/firebase-client"

export default function Login() {

  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')

  const doLogin = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    event.preventDefault()

    console.log('asdf')

    const result  = await auth.signInWithEmailAndPassword(email, password)
    const token   = await result.user.getIdToken()

    console.log('done')
  }

  return (
    <div>
      <Head>
        <title>maoo | Login</title>
      </Head>
      <h1>Login</h1>

      <form>
        <label>
          e-mail <input type='email' value={email} onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          password <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        <button onClick={doLogin}>login</button>
      </form>
    </div>
  )
}
