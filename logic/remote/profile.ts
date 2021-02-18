import type {
  GetInfoForUserQuery
} from '../../generated/graphql'
import {
  auth
} from "../firebase-client"
import {
  sdk
} from "./graphql"

export type Profiles = GetInfoForUserQuery["user"]["profiles"]

export interface ProfileRemote {
  get_info      (): Promise<Profiles>
  setup_profile (): Promise<Profiles>
}

const remote: ProfileRemote = {
  get_info      : async () => {
    const token   = await auth.currentUser.getIdToken()
    const result  = await sdk.GetInfoForUser({ id: auth.currentUser.uid }, {
      'x-auth-token'  : token,
      'x-auth-user'   : auth.currentUser.uid })

    return result.data.user.profiles
  },
  setup_profile : async () => []
}

export default remote
