import { useState } from 'react'
import { Helmet } from 'react-helmet'

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
      <Helmet>
        <title>Contact Us - Code Obsidian</title>
        <meta name="description" content="Get in touch with Code Obsidian. Our team is ready to answer your questions about full-stack development, API integration, and mobile app development." />
      </Helmet>
      <section>
        <div className='container'>
          <h1 className='animate-in'>Contact Us</h1>
          <h2 className='animate-in text-primary text-3xl font-[600] mb-6 md:text-4xl'>Get in Touch</h2>
          <form 
            className='animate-in flex flex-col gap-6 max-w-[600px]'
            onSubmit={handleSubmit}>
            {/* Form sections for name, email, phone, subject, and message */}
            {/* Ensure each input and textarea has an id that matches the htmlFor attribute of its label */}
            {/* Example for Name field: */}
            <div className='form-section'>
              <label htmlFor='name' className='required'>Name</label>
              <div className='flex flex-col gap-1'>
                <input 
                  id='name'
                  required
                  aria-required="true"
                  name='name'
                  value={name} 
                  onChange={handleNameChange}
                  aria-describedby="nameError" 
                />
                {nameErr.error && <span id="nameError" className='error'>{nameErr.msg}</span>}
              </div>
            </div>
            {/* Continue with email, phone, subject, and message fields */}
            <button type='submit' className='primary-button'>Send your message</button>
          </form>
        </div>
      </section>
    </main>
  )
}
