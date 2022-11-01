import { NextApiRequest, NextApiResponse } from 'next'
import data from '@/data/data.json'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).end(JSON.stringify({ result: data }))
}
