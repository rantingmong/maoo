import { MouseEventHandler, useEffect, useState } from "react"
import checkEmail from "@logic/util/format/check-email"

type Props = {
  onBack      : () => void
  onRegister  : (email: string, password: string) => void

  errorLogin  : string | null
  email       : string
}

export default function FormRegister(props: Props) {

  const [enabled,setEnabled]    = useState(false)
  const [email,setEmail]        = useState(props.email)
  const [password,setPassword]  = useState('')

  const doSubmit: MouseEventHandler = (button) => {
    button.preventDefault()
    props.onRegister(email, password)
  }

  useEffect(() => setEnabled(checkEmail(email) && password.length >= 8), [email, password])

  return (
    <form>
      <h3>Register</h3>
      <a onClick={props.onBack}>Back</a>

      <div>
        <label>
          Email
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
        </label>
        <span>{props.errorLogin}</span>
        <button disabled={!enabled} onClick={doSubmit}>Register</button>
      </div>
    </form>
  )
}
