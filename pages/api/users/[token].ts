import type { NextApiRequest, NextApiResponse } from 'next'

import {auth} from '@logic/firebase-server'
import {sdk} from '@logic/remote/graphql'

export default async function(req: NextApiRequest, res: NextApiResponse) {
  try {

    const token     = req.query.token

    if (!token) {
      res.status(404).end()
      return
    }

    const authInfo  = await auth.verifySessionCookie(<string> req.query.token)
    const userInfo  = await sdk.GetInfoForUser({ id:authInfo.uid })

    res.status(200).json(userInfo.data ?? {})
  } catch {

    res.status(200).json({})
  }
}
