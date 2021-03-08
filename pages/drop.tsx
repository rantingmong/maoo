import type { GetServerSideProps } from "next"
import Head from 'next/head'

import Drop from "@components/drop"
import useSession from "@logic/util/hook/useSession"

export const getServerSideProps: GetServerSideProps = useSession(async context => {
  return {
    props: {
    }
  }
})

export default function Drops() {
  return (
    <>
      <Head>
        <title>maoo | Drop</title>
      </Head>
      <Drop />
    </>
  )
}
