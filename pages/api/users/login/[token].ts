import type { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'
import cors from 'cors'

import { auth } from '@logic/firebase-server'

import withMiddleware from '@logic/util/hook/withMiddleware'
import withMethod from '@logic/util/hook/withMethod'

const age = 60 * 60 * 24 * 5
const age_milli = age * 1000

export default async (req: NextApiRequest, res: NextApiResponse) => withMethod(['POST'], req, res, async () => {

  await withMiddleware(req, res, cors({ methods: ['POST'], exposedHeaders: ['set-cookie'] }))

  try {
    // validate token is created in the last 10 minutes
    const token = await auth.verifyIdToken(<string>req.query.token)

    if (!(new Date().getTime() / 1000 - token.auth_time < 10 * 60)) {
      res.status(401).json({ result: 'window is too long to be validated.' })
      return
    }

    const session = await auth.createSessionCookie(<string>req.query.token, { expiresIn: age_milli })

    res.setHeader('Set-Cookie', cookie.serialize('user', session, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      path: '/',
      expires: new Date(Date.now() + age_milli),
      maxAge: age
    }))
    res.status(200).json({ result: true })
  } catch (error) {
    res.status(500).json({ result: 'something went wrong', detail: error })
  }
})
