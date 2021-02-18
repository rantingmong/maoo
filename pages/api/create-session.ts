import {NextApiRequest, NextApiResponse} from 'next'
import {auth} from '../../logic/firebase-server'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const result = await auth.createSessionCookie('', {expiresIn: 5 * 86400000})

  res.status(200).end()
}
