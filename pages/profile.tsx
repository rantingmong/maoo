import type { GetServerSideProps } from "next"
import Head from 'next/head'

import Profile from "@components/profile"
import useSession from "@logic/util/hook/useSession"

export const getServerSideProps: GetServerSideProps = useSession(async context => {
  return {
    props: {
    }
  }
})

export default function ProfileInfo({user}) {
  return (
    <>
      <Head>
        <title>maoo | Your Profile</title>
      </Head>
      <Profile user={user}/>
    </>
  )
}
