import type {GetServerSideProps} from "next"
import Dashboard from "../components/dashboard"

type UserState  = 'unauthenticated' | 'needs-revalidation' | 'profile-missing' | 'normal'
type Props      = {
  state: UserState
}

export const getServerSideProps: GetServerSideProps<Props> = async ({req}) => {

  if (!req.cookies.session) {
    return {
      redirect: {
        destination : '/landing',
        permanent   : false
      }
    }
  }

  return {
    props: {
      state: 'normal'
    }
  }
}

function HomePage({state}: Props) {
  return <Dashboard/>
}

export default HomePage
