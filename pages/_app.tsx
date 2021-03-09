import { filter, map } from 'lodash'
import type { AppProps } from 'next/app'

import Dashboard from '@components/dashboard'

import 'tailwindcss/tailwind.css'
import '../public/styles.css'

export default function App({ Component, pageProps, router }: AppProps) {

  const rootRoutes  = [/\/$/, /\/post\/\S*$/, /\/drop$/, /\/profile(\/\S)*$/]
  const matches     = map(rootRoutes, route => router.pathname.match(route) != null)

  if (filter(matches, match => match).length) {
    return (
      <Dashboard {...pageProps}>
        <Component {...pageProps}/>
      </Dashboard>
    )
  }

  return <Component {...pageProps} />
}
