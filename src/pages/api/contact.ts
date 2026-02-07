import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, phone, subject, message } = req.body

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  // In production, send email notification or save to database
  console.log('Contact form submission:', {
    name,
    email,
    phone,
    subject,
    message,
    timestamp: new Date().toISOString(),
  })

  return res.status(200).json({ message: 'Message received successfully' })
}
