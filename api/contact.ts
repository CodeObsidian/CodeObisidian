import { Resend } from 'resend'

export const config = {
  runtime: 'nodejs',
}

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const resendApiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.RESEND_FROM
  const toEmail = process.env.CONTACT_EMAIL

  if (!resendApiKey || !fromEmail || !toEmail) {
    return res.status(503).json({
      error: 'Email service not configured.',
    })
  }

  const { name, email, phone, subject, message } = req.body ?? {}

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({
      error: 'Name, email, and message are required.',
    })
  }

  if (!EMAIL_REGEX.test(email.toLowerCase())) {
    return res.status(400).json({
      error: 'Please provide a valid email address.',
    })
  }

  const resend = new Resend(resendApiKey)

  const html = [
    `<p><strong>Name:</strong> ${escapeHtml(name)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
    phone && `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>`,
    subject && `<p><strong>Project type:</strong> ${escapeHtml(subject)}</p>`,
    '<p><strong>Message:</strong></p>',
    `<p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
  ]
    .filter(Boolean)
    .join('')

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: email,
    subject: subject ? `Contact: ${subject}` : 'Contact form submission',
    html,
  })

  if (error) {
    return res.status(500).json({ error: error.message })
  }

  return res.status(200).json({ success: true })
}
