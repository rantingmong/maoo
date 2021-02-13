import {auth}               from "./firebase"
import ProfileRemote        from './remote/profile'

import {state as navState} from "../store/navigation"

import SetupProfileDialog   from '../pages/dialogs/setup-profile.svelte'

import type {Dialog}        from '../store/navigation'
import type firebase        from 'firebase'

export interface SplashInteraction {
  start           (): Promise<void>
  mount_session   (change: (user: firebase.User | null) => void): firebase.Unsubscribe
  unmount_session ()
}

class Impl implements SplashInteraction {

  session         : firebase.Unsubscribe

  async start     () {
    this.session = this.mount_session(user => {
      navState.update(cur => {
        return { ...cur, page: "splash" }
      })
      if (user) {
        ProfileRemote
          .get_info ()
          .then     (profiles => {
            navState.update(cur => {
              const dialog: Dialog | null = profiles.length == 0
                ? { type:'dialog', content:SetupProfileDialog }
                : null
              return { page: "dashboard", dialog  }
            })
          })
      } else {
        navState.update(cur => {
          return { ...cur, page: "landing" }
        })
      }
    })
  }
  mount_session   (change: (user: firebase.User | null) => void): firebase.Unsubscribe {
    return auth.onAuthStateChanged(change)
  }
  unmount_session () {
    this.session()
  }
}

export default Impl
