import { NextApiRequest, NextApiResponse } from 'next'
import type {auth as fba} from 'firebase-admin/lib/auth'

import {auth} from '@logic/firebase-server'

export default async function(req: NextApiRequest, res: NextApiResponse, inside: (user: fba.DecodedIdToken) => void | Promise<void>) {
  try {
    var token = await auth.verifySessionCookie(req.cookies.user || '')
  } catch (error) {
    res.status(401).json({reason:'expired',error})
    return
  }

  await inside(token)
}
