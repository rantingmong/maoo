import { useEffect, useState } from "react"
import { useRouter } from 'next/router'

import MaooRemote from "@logic/remote/contract/maoo"

type Screen = 'default' | 'login' | 'register' | 'loading' 

type Internal = {
  scope: 'email' | 'login' | 'register' | null
  payload: any
}

type State = {
  errorSocial: string | null
  errorEmail: string | null
  errorLogin: string | null

  email: string
  screen: Screen
}
export type Contract = {
  remote: MaooRemote
}

export default function LandingBinding(contract: Contract) {

  const router = useRouter()

  const [state, setState] = useState<Internal & State>({
    scope: null,
    payload: null,

    screen: "default",
    email: '',
    errorLogin: null,
    errorEmail: null,
    errorSocial: null
  })

  useEffect(() => {

    if (!state.scope) {
      return
    }

    async function doEmail() {
      const result = await contract.remote.checkEmail(state.payload)

      if (result) {
        setState(p => { return { ...p, scope: null, errorEmail: null, screen: 'login' } })
      } else {
        setState(p => { return { ...p, scope: null, errorEmail: null, screen: 'register' } })
      }
    }

    async function doLogin() {
      const [email, password] = state.payload

      try {
        await contract.remote.loginEmail(email, password)
        await router.replace('/')
      } catch (e) {
        setState(p => { return { ...p, scope: null, errorLogin: e.message, screen: 'login' } })
      }
    }

    async function doRegister() {
      const [email, password] = state.payload

      try {
        await contract.remote.registerEmail(email, password)
        await router.replace('/')
      } catch (e) {
        setState(p => { return { ...p, scope: null, errorLogin: e.message, screen: 'login' } })
      }
    }

    switch (state.scope) {
      case "email": doEmail()
        break
      case "login": doLogin()
        break
      case "register": doRegister()
        break
    }
  }, [state])

  return {
    // input
    onEmail: (email: string) => {
      setState(p => { return { ...p, email, payload: email, scope: 'email', screen: 'loading' } })
    },
    onLogin: (password: string) => {
      setState(p => { return { ...p, payload: [p.email, password], scope: 'login', screen: 'loading' } })
    },
    onRegister: (email: string, password: string) => {
      setState(p => { return { ...p, payload: [email, password], scope: 'register', screen: 'loading' } })
    },
    onSocial: (social: string) => {
    },
    toDefault: () => {
      setState(p => { return { ...p, email: '', scope: null, screen: 'default' } })
    },

    // output
    state: <State>state,
  }
}
