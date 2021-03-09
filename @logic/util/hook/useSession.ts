import type {GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult, Redirect} from 'next'
import type {ParsedUrlQuery} from 'querystring'
import axios from 'axios'

import {GetInfoForUserQuery} from '@logic/graphql'

export type AuthenticatedSession = {
  user: GetInfoForUserQuery["user"]
}

export default function useSession<
  P extends { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery>(
    inside: (context: GetServerSidePropsContext<Q> & AuthenticatedSession) => Promise<GetServerSidePropsResult<P>>,
    destination: string = '/landing'): GetServerSideProps<P, Q> {
  return async (context: GetServerSidePropsContext<Q>): Promise<GetServerSidePropsResult<P & AuthenticatedSession>> => {

    const session = context.req.cookies.user

    if (!session) {
      return {
        redirect: {
          permanent: false,
          destination
        }
      }
    }

    const user = (await axios.get(`http://vercel:3000/api/users/${session}`, {withCredentials:true})).data.user || {}
    const result = await inside({...context, user})

    if ('props' in result) {
      return {
        props: {
          ...result.props,
          user
        }
      }
    }

    if ('redirect' in result) {
      return {
        redirect: result.redirect
      }
    }

    if (result.notFound) {
      return {
        notFound: true
      }
    }
  }
}
