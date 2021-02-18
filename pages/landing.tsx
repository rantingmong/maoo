import Link from 'next/link'
import Head from "next/head"

function Landing() {
  return (
    <div>
      <Head>
        <title>maoo</title>
      </Head>
      <h1>Maoo!</h1>
      <p>The social platform for cats!</p>

      <Link href='/login'>
        <button>Login</button>
      </Link>
      <Link href='/register'>
        <button>Register</button>
      </Link>
    </div>
  )
}

export default Landing
