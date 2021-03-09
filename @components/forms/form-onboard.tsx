import {MouseEventHandler, useEffect, useState} from "react"

import checkEmail from '@logic/util/format/check-email'

type Props = {
  onEmail     : (string:string) => void
  onSocial    : (source:'google'|'apple') => void

  email       : string

  errorEmail  : string | null
  errorSocial : string | null
}

export default function FormOnboard(props: Props) {

  const [enableSubmit, setEnableSubmit] = useState(false)
  const [email, setEmail] = useState(props.email)

  const renderErrorEmail = () => {
    if (props.errorEmail) {
      return <span>{props.errorEmail}</span>
    }
  }

  const renderErrorSocial = () => {
    if (props.errorSocial) {
      return <span>{props.errorSocial}</span>
    }
  }

  const onSubmit: MouseEventHandler = async button => {
    button.preventDefault()
    props.onEmail(email)
  }

  useEffect(() => setEnableSubmit(checkEmail(email)), [email])

  return (
    <form className='onboard'>
      <p>Sign in:</p>
      {renderErrorSocial()}
      <button onClick={() => props.onSocial('apple')}>Continue with Apple</button>
      <button onClick={() => props.onSocial('google')}>Continue with Google</button>

      <p>Or enter your email:</p>
      <input placeholder='Your email address' value={email} onChange={input => setEmail(input.target.value)}/>
      {renderErrorEmail()}

      <button disabled={!enableSubmit} onClick={onSubmit}>Continue</button>
    </form>
  )
}
