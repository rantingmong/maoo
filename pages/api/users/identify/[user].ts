import type { NextApiRequest, NextApiResponse } from 'next'
import cors from 'cors'

import { auth } from '@logic/firebase-server'

import withMiddleware from '@logic/util/hook/withMiddleware'
import withMethod from '@logic/util/hook/withMethod'

export default async (req: NextApiRequest, res: NextApiResponse) => withMethod(['GET'], req, res, async () => {

  await withMiddleware(req, res, cors({ methods: ['POST'] }))

  try {
    const user = await auth.getUserByEmail(<string>req.query.user)
    res.status(200).json({ result: true, user: user.email })
  } catch {
    res.status(404).json({ result: 'not found' })
  }
})
