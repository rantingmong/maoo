import {useRouter} from 'next/router'

import locator from '@logic/locator'
import useBinding from '@logic/binding/Landing'

import OnboardForm from '@components/forms/form-onboard'
import LoginForm from '@components/forms/form-login'
import RegisterForm from "@components/forms/form-register"
import Button from './common/button'

export default function Onboard({ showOnboard, hasProfile }) {

  const {
    state,
    onEmail,
    onSocial,
    onLogin,
    onRegister,
    toDefault
  } = useBinding({ remote: locator.resolve('remoteMaoo') })

  const router = useRouter()

  if (!showOnboard) {
    return <div />
  }

  if (!hasProfile) {
    switch (state.screen) {
      case "loading":
        return <h1>Loading...</h1>
      case "default":
        return <OnboardForm onEmail={onEmail} onSocial={onSocial} {...state} />
      case "login":
        return <LoginForm onBack={toDefault} onLogin={onLogin} {...state} />
      case "register":
        return <RegisterForm onBack={toDefault} onRegister={onRegister} {...state} />
    }
  } else {
    return <Button tier='primary' onTap={() => router.replace('/')}>Open maoo</Button>
  }
}
