import {GraphQLClient}  from "graphql-request"
import {getSdk, Sdk}    from "../../generated/graphql"

export const client   = new GraphQLClient('http://localhost:8080/v1/graphql')
export const sdk: Sdk = getSdk(client)