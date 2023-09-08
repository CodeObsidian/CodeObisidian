import { useState } from 'react'

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

  const [nameErr, setNameErr] = useState<FormError>({
    error: false,
    msg: ''
  })
  const [emailErr, setEmailErr] = useState<FormError>({
    error: false,
    msg: ''
  })
  const [messageErr, setMessageErr] = useState<FormError>({
    error: false,
    msg: ''
  })

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const s = e.target.value
    
    setName(s)

    if(s == '') {
      setNameErr({
        error: true,
        msg: 'Please enter a name.'
      })
    } else {
      setNameErr({
        error: false,
        msg: ''
      })
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const s = e.target.value

    setEmail(s)

    const validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(!s.toLowerCase().match(validRegex)) {
      setEmailErr({
        error: true,
        msg: 'Please enter a valid email.'
      })
    } else {
      setEmailErr({
        error: false,
        msg: ''
      })
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

    if(s == '') {
      setMessageErr({
        error: true,
        msg: 'Please enter a message.'
      })
    } else {
      setMessageErr({
        error: false,
        msg: ''
      })
    }
  }

  const handleSubmit = (e : React.FormEvent) => {
    e.preventDefault()

    // TODO: Handle sending an email
  }

  return (
    <main className='page'>
      <section>
        <div className='container'>
          <h1 className='animate-in'>Contact</h1>
          <h2 className='animate-in text-primary text-3xl font-[600] mb-6 md:text-4xl'>Get in Touch</h2>
          <form 
            className='animate-in flex flex-col gap-6 max-w-[600px]'
            onSubmit={handleSubmit}>
            <div className='form-section'>
              <label htmlFor='name' className='required'>Name</label>
              <div className='flex flex-col gap-1'>
                <input 
                  required
                  aria-required
                  name='name'
                  value={name} 
                  onChange={handleNameChange} 
                />
                {nameErr.error && <span className='error'>{nameErr.msg}</span>}
              </div>
            </div>
            <div className='form-section'>
              <label htmlFor='email' className='required'>Email</label>
              <div className='flex flex-col gap-1'>
                <input 
                  required
                  aria-required
                  name='email'
                  value={email} 
                  onChange={handleEmailChange} 
                />
                {emailErr.error && <span className='error'>{emailErr.msg}</span>}
              </div>
            </div>
            <div className='form-section'>
              <label htmlFor='phone'>Phone</label>
              <input 
                name='phone'
                value={phone} 
                onChange={handlePhoneChange} 
              />
            </div>
            <div className='form-section'>
              <label htmlFor='subject'>Subject</label>
              <input 
                name='subject'
                value={subject} 
                onChange={handleSubjectChange} 
              />
            </div>
            <div className='form-section'>
              <label htmlFor='message' className='required'>Message</label>
              <div className='flex flex-col gap-1'>
                <textarea 
                  required
                  aria-required
                  name='message'
                  value={message} 
                  onChange={handleMessageChange} 
                />
                {messageErr.error && <span className='error'>{messageErr.msg}</span>}
              </div>
            </div>
            <button type='submit' className='primary-button'>Send your message</button>
          </form>
        </div>
      </section>
    </main>
  )
}
