import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { Resend } from 'resend'

const app = express()
const port = process.env.PORT ?? 3001

app.use(cors({ origin: true }))
app.use(express.json())

const resendApiKey = process.env.RESEND_API_KEY
const fromEmail = process.env.RESEND_FROM ?? 'Code Obsidian <info@codeobsidian.com>'
const toEmail = process.env.CONTACT_EMAIL ?? 'tredner@codeobsidian.com'

console.log(fromEmail, toEmail)
console.log(resendApiKey)

app.post('/api/contact', async (req, res) => {
  if (!resendApiKey) {
    return res.status(503).json({
      error: 'Email is not configured. Add RESEND_API_KEY to your .env file.',
    })
  }

  const { name, email, phone, subject: projectType, message } = req.body ?? {}

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({
      error: 'Name, email, and message are required.',
    })
  }

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!email.trim().toLowerCase().match(emailRegex)) {
    return res.status(400).json({
      error: 'Please provide a valid email address.',
    })
  }

  const resend = new Resend(resendApiKey)
  const subject = projectType?.trim()
    ? `Contact: ${projectType.trim()}`
    : 'Contact form submission'

  const html = [
    `<p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>`,
    phone?.trim() && `<p><strong>Phone:</strong> ${escapeHtml(phone.trim())}</p>`,
    projectType?.trim() &&
      `<p><strong>Project type:</strong> ${escapeHtml(projectType.trim())}</p>`,
    '<p><strong>Message:</strong></p>',
    `<p>${escapeHtml(message.trim()).replace(/\n/g, '<br>')}</p>`,
  ]
    .filter(Boolean)
    .join('')

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email.trim(),
      subject,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(500).json({ error: error.message ?? 'Failed to send email.' })
    }

    res.status(200).json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Send error:', err)
    res.status(500).json({ error: 'Failed to send message. Please try again.' })
  }
})

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
  if (!resendApiKey) {
    console.warn('RESEND_API_KEY is not set. Add it to .env to enable the contact form.')
  }
})
