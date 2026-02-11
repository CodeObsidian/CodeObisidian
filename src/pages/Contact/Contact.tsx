import { useState } from 'react'
import { Helmet } from 'react-helmet'
import {
  HiChatAlt2,
  HiClock,
  HiMail,
 
  HiShieldCheck,
  HiSparkles,
} from 'react-icons/hi'

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

interface FormError {
  error: boolean
  msg: string
}

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const [nameErr, setNameErr] = useState<FormError>({ error: false, msg: '' })
  const [emailErr, setEmailErr] = useState<FormError>({ error: false, msg: '' })
  const [messageErr, setMessageErr] = useState<FormError>({ error: false, msg: '' })
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [submitError, setSubmitError] = useState<string>('')

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const s = e.target.value
    setName(s)
    if (s === '') {
      setNameErr({ error: true, msg: 'Please enter a name.' })
    } else {
      setNameErr({ error: false, msg: '' })
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const s = e.target.value
    setEmail(s)
    if (!s.toLowerCase().match(EMAIL_REGEX)) {
      setEmailErr({ error: true, msg: 'Please enter a valid email.' })
    } else {
      setEmailErr({ error: false, msg: '' })
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value)
  }

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value)
  }

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const s = e.target.value
    setMessage(s)
    if (s === '') {
      setMessageErr({ error: true, msg: 'Please enter a message.' })
    } else {
      setMessageErr({ error: false, msg: '' })
    }
  }

  const validate = (): boolean => {
    let valid = true
    if (!name.trim()) {
      setNameErr({ error: true, msg: 'Please enter a name.' })
      valid = false
    } else {
      setNameErr({ error: false, msg: '' })
    }
    if (!email.trim()) {
      setEmailErr({ error: true, msg: 'Please enter your email.' })
      valid = false
    } else if (!email.toLowerCase().match(EMAIL_REGEX)) {
      setEmailErr({ error: true, msg: 'Please enter a valid email.' })
      valid = false
    } else {
      setEmailErr({ error: false, msg: '' })
    }
    if (!message.trim()) {
      setMessageErr({ error: true, msg: 'Please enter a message.' })
      valid = false
    } else {
      setMessageErr({ error: false, msg: '' })
    }
    return valid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('idle')
    if (!validate()) return

    setSubmitStatus('sending')
    setSubmitError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          subject: subject.trim(),
          message: message.trim(),
        }),
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        setSubmitStatus('error')
        setSubmitError(typeof data?.error === 'string' ? data.error : 'Something went wrong. Please try again.')
        return
      }
      setSubmitStatus('success')
      setName('')
      setEmail('')
      setPhone('')
      setSubject('')
      setMessage('')
      setNameErr({ error: false, msg: '' })
      setEmailErr({ error: false, msg: '' })
      setMessageErr({ error: false, msg: '' })
    } catch {
      setSubmitStatus('error')
      setSubmitError('Network error. Make sure the server is running (npm run server).')
    }
  }

  return (
    <main className="page">
      <Helmet>
        <title>Contact Code Obsidian - Custom Software Solutions</title>
        <meta
          name="description"
          content="Get in touch with Code Obsidian for cutting-edge web and mobile app development. Our team is ready to help you with custom software solutions. Contact us today."
        />
      </Helmet>
      <Hero />
      <section id="contact-form">
        <div className="container grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="flex flex-col gap-5">
            <div className="animate-in-screen rounded-3xl border border-border bg-bg-card p-6 md:p-8 shadow-card">
              <div className="flex flex-col gap-2 mb-6">
                <p className="text-accent text-xs font-semibold uppercase tracking-wider">Send a note</p>
                <h2 className="font-display text-2xl md:text-3xl text-primary font-semibold tracking-tight">
                  Tell us about your build or refresh
                </h2>
                <p className="text-secondary text-sm leading-relaxed">
                  Share goals, timelines, or the current state of your product. We respond quickly with next steps.
                </p>
              </div>
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="form-section">
                  <label htmlFor="name" className="required">
                    Name
                  </label>
                  <div className="flex flex-col gap-1">
                    <input
                      id="name"
                      required
                      aria-required="true"
                      name="name"
                      value={name}
                      onChange={handleNameChange}
                      aria-describedby="nameError"
                    />
                    {nameErr.error && (
                      <span id="nameError" className="error">
                        {nameErr.msg}
                      </span>
                    )}
                  </div>
                </div>
                <div className="form-section">
                  <label htmlFor="email" className="required">
                    Email
                  </label>
                  <div className="flex flex-col gap-1">
                    <input
                      id="email"
                      required
                      aria-required="true"
                      name="email"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      aria-describedby="emailError"
                    />
                    {emailErr.error && (
                      <span id="emailError" className="error">
                        {emailErr.msg}
                      </span>
                    )}
                  </div>
                </div>
                <div className="form-section">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                  />
                </div>
                <div className="form-section">
                  <label htmlFor="subject">Project type</label>
                  <input
                    id="subject"
                    name="subject"
                    placeholder="New build, redesign, integrations, ongoing updates..."
                    value={subject}
                    onChange={handleSubjectChange}
                  />
                </div>
                <div className="form-section">
                  <label htmlFor="message" className="required">
                    Message
                  </label>
                  <div className="flex flex-col gap-1">
                    <textarea
                      id="message"
                      required
                      aria-required="true"
                      name="message"
                      value={message}
                      onChange={handleMessageChange}
                      aria-describedby="messageError"
                      placeholder="What are you aiming to achieve and by when?"
                    />
                    {messageErr.error && (
                      <span id="messageError" className="error">
                        {messageErr.msg}
                      </span>
                    )}
                  </div>
                </div>
                {submitStatus === 'success' && (
                  <p className="text-success text-sm font-medium">
                    Message sent. We&apos;ll get back to you soon.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-error text-sm font-medium">
                    {submitError || 'Something went wrong. Please email us directly at info@codeobsidian.com.'}
                  </p>
                )}
                <button
                  type="submit"
                  className="primary-button text-sm w-fit disabled:opacity-60 disabled:pointer-events-none"
                  disabled={submitStatus === 'sending'}
                >
                  {submitStatus === 'sending' ? 'Opening…' : 'Send your message'}
                </button>
              </form>
            </div>
          </div>

          <aside className="animate-in-screen flex flex-col gap-5 rounded-3xl border border-border bg-bg-card p-6 shadow-card">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-accent-muted p-3">
                <HiChatAlt2 className="text-accent w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-muted text-xs font-semibold uppercase tracking-wider">Response time</span>
                <span className="font-display text-primary text-lg font-semibold">Under 1 business day</span>
              </div>
            </div>
            <p className="text-secondary text-sm leading-relaxed">
              Share links, requirements, and timelines—we'll scope quickly, suggest a path, and align on next steps with a consult call.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: <HiMail />, label: 'Email', value: 'info@codeobsidian.com' },
                // { icon: <HiPhoneOutgoing />, label: 'Phone', value: '(US) +1 (555) 123-4567' },
                { icon: <HiClock />, label: 'Hours', value: 'Mon–Fri • 9am–6pm ET' },
                { icon: <HiShieldCheck />, label: 'Engagement', value: 'NDA-friendly & security-first' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-border bg-bg-elevated/50 p-4 flex items-start gap-3 transition-colors hover:border-border-hover"
                >
                  <div className="rounded-lg bg-accent-muted p-2 text-accent shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="text-muted text-xs font-semibold uppercase tracking-wider">{item.label}</span>
                    <span className="text-primary text-sm font-medium break-all">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-border bg-bg-elevated/50 p-4 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-accent">
                <HiSparkles className="w-5 h-5 shrink-0" />
                <span className="font-display font-semibold text-sm">What to expect</span>
              </div>
              <ul className="flex flex-col gap-2 text-secondary text-sm list-disc list-inside leading-relaxed">
                <li>Discovery call to understand goals and constraints</li>
                <li>Proposal with milestones, timeline, and engagement model</li>
                <li>Motion-ready UI, accessible builds, and measurable launches</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

const Hero = () => {
  return (
    <section className="relative pt-4 pb-8">
      <div className="container grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="flex flex-col gap-5 z-10">
          <p className="animate-in text-muted uppercase tracking-wider text-xs font-semibold">Contact Code Obsidian</p>
          <h1 className="animate-in font-display text-4xl md:text-5xl font-semibold leading-[1.08] tracking-tight text-primary">
            Book a consult. Get a modern build plan.
          </h1>
          <p className="animate-in text-secondary text-lg md:text-xl max-w-[600px] leading-relaxed">
            Share what you need—new product, site refresh, or ongoing updates—and we'll return with the best way to launch quickly and confidently.
          </p>
          <div className="animate-in flex flex-wrap gap-2">
            {['Custom projects & revamps', 'Performance & accessibility', 'Lifecycle support'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-bg-card px-4 py-2 text-secondary text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="animate-in rounded-3xl border border-border bg-bg-card p-6 shadow-card">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-muted text-xs font-semibold uppercase tracking-wider">Ready in a day</span>
                <span className="rounded-full border border-border bg-bg-elevated px-3 py-1 text-xs text-secondary font-medium">
                  No obligation
                </span>
              </div>
              <p className="font-display text-primary text-xl font-semibold leading-snug">
                "We needed a fresh look and better performance—Code Obsidian shipped both without slowing our roadmap."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-accent-muted flex items-center justify-center font-display text-accent font-semibold text-sm">
                  CO
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-primary font-semibold text-sm">A partner team</span>
                  <span className="text-secondary text-xs">Product lead, SaaS</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border bg-bg-elevated/50 p-4">
                  <p className="text-muted text-xs font-semibold uppercase tracking-wider">Engagements</p>
                  <p className="font-display text-primary text-base font-semibold">New builds, revamps, retainers</p>
                </div>
                <div className="rounded-xl border border-border bg-bg-elevated/50 p-4">
                  <p className="text-muted text-xs font-semibold uppercase tracking-wider">Tooling</p>
                  <p className="font-display text-primary text-base font-semibold">React, Node, APIs, Mobile</p>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-bg-elevated/50 p-4 flex items-center justify-between gap-4">
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-muted text-xs font-semibold uppercase tracking-wider">Let's start</span>
                  <span className="font-display text-primary font-semibold text-sm">Share your goals and timeline</span>
                </div>
                <a
                  href="#contact-form"
                  className="rounded-full border border-accent text-accent px-4 py-2 text-xs font-semibold shrink-0 hover:bg-accent-muted transition-colors"
                >
                  Book a consult
                </a>
              </div>
            </div>
          </div>
          <div className="glow absolute -right-16 top-1/2 -z-10 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-accent/15 blur-[100px] hidden md:block" />
        </div>
      </div>
    </section>
  )
}





