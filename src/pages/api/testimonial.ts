import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, project, quote, rating } = req.body

  if (!name || !project || !quote || !rating) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  // In production, save to database and/or send notification
  console.log('Testimonial submission:', {
    name,
    project,
    quote,
    rating,
    timestamp: new Date().toISOString(),
  })

  return res.status(200).json({ message: 'Testimonial submitted successfully' })
}
