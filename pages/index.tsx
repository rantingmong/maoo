import type { GetServerSideProps } from "next"
import Head from 'next/head'

import Feed from "@components/feed"
import useSession from "@logic/util/hook/useSession"

export const getServerSideProps: GetServerSideProps = useSession(async context => {
  return {
    props: {
    }
  }
})

export default function HomePage({ user }) {
  return (
    <>
      <Head>
        <title>maoo</title>
      </Head>
      <Feed />
    </>
  )
}
