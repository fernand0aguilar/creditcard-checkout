import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  // Get data from your database
  res.status(200).json({ message: 'pagar resposta' })
}
