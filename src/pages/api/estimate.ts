import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, phone, address, projectType, timeline, budget, description } = req.body

  if (!name || !email || !projectType || !description) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  // In production, send email notification or save to database
  console.log('Estimate request received:', {
    name,
    email,
    phone,
    address,
    projectType,
    timeline,
    budget,
    description,
    timestamp: new Date().toISOString(),
  })

  return res.status(200).json({ message: 'Estimate request received successfully' })
}
