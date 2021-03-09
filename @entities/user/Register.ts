/**
 * Represents a user that's going to register.
 */
export type RegisterStep1 = {
  email     : string
  username  : string
  password  : string
}

export type RegisterStep2 = {
  name: {
    given   : string
    family  : string
  }

  gender    : string
  birthdate : string
}
