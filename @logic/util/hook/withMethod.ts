import { NextApiRequest, NextApiResponse } from "next"
import {includes} from 'lodash'

export default async (
  allow: string[],
  req: NextApiRequest,
  res: NextApiResponse,
  inside: () => void | Promise<void>) => {
    if (includes(allow, req.method || '')) {
      await inside()
    } else {
      res.status(403).json({reason:'invalid request'})
    }
  }
