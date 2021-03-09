import {MouseEventHandler, useEffect, useState} from "react"

type Props = {
  onBack    : () => void
  onLogin   : (password: string) => void

  email     : string
  errorLogin: string | null
}

export default function FormLogin({email, errorLogin, onBack, onLogin}: Props) {

  const [enabled,setEnabled]    = useState(true)
  const [password,setPassword]  = useState('')

  const onSubmit: MouseEventHandler = (button) => {
    button.preventDefault()
    onLogin(password)
  }

  const renderErrorLogin = () => {
    if (errorLogin) {
      return <span>{errorLogin}</span>
    }
  }

  useEffect(() => setEnabled(password.length > 0), [password])

  return (
    <form>
      <h3>Login</h3>
      <a onClick={onBack}>Back</a>

      <div>
        <label>
          Email
          <input value={email} readOnly/>
        </label>
        <label>
          Password
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
        </label>

        {renderErrorLogin()}
        <button disabled={!enabled} onClick={onSubmit}>Login</button>
      </div>
    </form>
  )
}
