import { writable } from "svelte/store"
import type { SvelteComponent } from "svelte"

import Login      from '../pages/login.svelte'
import Landing    from '../pages/landing.svelte'
import Dashboard  from '../pages/dashboard.svelte'
import Register   from '../pages/register.svelte'
import Splash     from '../pages/splash.svelte'

export const pageDefinitions = {
  landing   : Landing,
  dashboard : Dashboard,
  login     : Login,
  register  : Register,
  splash    : Splash
}

export type Dialog = {
  type    : 'error' | 'dialog',
  content :
    any |
    { title   : string,
      message : string,
      cta_positive  : string,
      cta_negative  : string
    }
}

export type Navigation = {
  page    : 'landing' | 'dashboard' | 'login' | 'register' | 'splash' | null,
  dialog  : Dialog | null
}

export const state = writable<Navigation>({ page:"splash", dialog:null })
