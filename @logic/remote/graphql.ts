import { GraphQLClient } from "graphql-request"
import { getSdk } from "@logic/graphql"

import environment from '@logic/util/endpoints'

export const client = new GraphQLClient(`${environment.hasura}/v1/graphql`, {
  headers: {
    'x-hasura-admin-secret': 'adminsecret'
  }
})
export const sdk = getSdk(client)
