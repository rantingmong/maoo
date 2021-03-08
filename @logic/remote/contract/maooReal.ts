import Maoo   from "@logic/remote/contract/maoo"
import {auth} from '@logic/firebase-client'

import axios  from "axios"

export default function Impl(): Maoo {
  return {
    async checkEmail    (input: string): Promise<boolean> {
      try {
        const finish = await axios.get(`/api/users/identify/${input}`)

        if (finish.data.result) {
          return true
        }
      } catch (error) {
        return false
      }
    },
    async loginEmail    (email: string, password: string): Promise<void> {
      const result  = await auth.signInWithEmailAndPassword(email, password)
      const token   = await result.user.getIdToken()

      const finish  = await axios.post(`/api/users/login/${token}`, {}, {withCredentials:true})

      if (finish.data.result === true) {
        auth.signOut() // we don't need this anymore
      }
    },
    async registerEmail (email: string, password: string): Promise<void> {
      const result  = await auth.createUserWithEmailAndPassword(email, password)
      const token   = await result.user.getIdToken()

      const finish  = await axios.post(`/api/users/register/${token}`, {}, {withCredentials:true})

      if (finish.data.result === true) {
        auth.signOut() // we don't need this anymore
      }
    }
  }
}
