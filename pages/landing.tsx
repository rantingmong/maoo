import Button from "@components/common/button"
import Onboard from "@components/onboard"
import { GetServerSideProps } from "next"
import Head from "next/head"

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      hasProfile: !!req.cookies.user,
      showOnboard: process.env.NODE_ENV === 'development'
    }
  }
}

export default function Landing(props) {
  return (
    <div className='absolute left-0 top-0 w-full h-full'>
      <Head><title>maoo</title></Head>
      <div className='px-5 py-3 fixed left-0 top-0 right-0 flex justify-between items-center bg-white'>
        <span className='invisible select-none cursor-default text-4xl font-bold'>maoo</span>
        <Onboard {...props} />
      </div>
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <h1 className='text-4xl font-bold'>maoo</h1>
        <p>The social platform for cats!</p>
      </div>
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <h1 className='text-4xl font-bold'>Be Social!</h1>
        <p>maoo is a platform that connects fellow cat and cat owners.</p>
        <p>Share your cat photos, post for adoption drvies, and more!</p>
      </div>
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <h1 className='text-4xl font-bold'>Be Safe</h1>
        <p>maoo is built for cat people by cat people.</p>
        <p>We won't share your data to outside influence (see our privacy policy).</p>
      </div>
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <h1 className='text-4xl font-bold'>Be Empowered</h1>
        <p>maoo let's you share questions about raising a cat</p>
        <p>A highly focused group gives you the confidence of whatever you think!</p>
      </div>
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <h1 className='text-4xl font-bold'>Want in?</h1>
        <p>Join the waitlist now!</p>
        <Button tier='primary'>Let me be in the know!</Button>
      </div>
    </div>
  )
}
