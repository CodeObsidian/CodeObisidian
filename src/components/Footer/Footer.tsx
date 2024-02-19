import { Link, NavLink } from "react-router-dom"
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='bg-bg border-t-[2px] border-t-shade py-[40px]'>
      <div className='container flex flex-col gap-6 md:flex-row md:justify-between'>
        <div className='flex flex-col gap-6'>
          <Link to='/'>
            <img 
              src='assets/images/White logo - no background.svg'
              alt='White logo'
              className='w-[225px]'
            />
          </Link>
         
          <div className='flex flex-col gap-1'>
            <h2 className='text-secondary font-[600]'>Get In Touch</h2>
            <a href='mailto:support@codeobsidian.org' className='text-primary font-[600]'>info@codeobsidian.com</a>
          </div>
          <div className='flex flex-col gap-1'>
            <h2 className='text-secondary font-[600]'>Connect With Us</h2>
            <div className='flex flex-row gap-2'>
              <a 
                href='#' 
                target='_blank' 
                rel='noopener noreferrer'
                className='text-primary text-3xl'>
                <FaLinkedin />
              </a>
              <a 
                href='#' 
                target='_blank' 
                rel='noopener noreferrer'
                className='text-primary text-3xl'>
                <FaGithub />
              </a>
              <a 
                href='#' 
                target='_blank' 
                rel='noopener noreferrer'
                className='text-primary text-3xl'>
                <FaInstagram />
              </a>
            </div>
          </div>
          <span className='text-secondary'>© {new Date(Date.now()).getFullYear()} Code Obsidian</span>
        </div>
        <hr className='border border-shade h-[2px] md:hidden'></hr>
        <div className='grid grid-cols-2 gap-10 sm:grid-cols-3'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-1'>
              <h2 className='text-secondary font-[600] mb-2'>Learn</h2>
              <NavLink to='/about' className='text-primary font-[600]'>About Us</NavLink>
              <NavLink to='/services' className='text-primary font-[600]'>Our Services</NavLink>
            </div>
            <div className='flex flex-col gap-1'>
              <h2 className='text-secondary font-[600] mb-2'>Legal</h2>
              <Link to='#' className='text-primary font-[600]'>Privacy Policy</Link>
              <Link to='#' className='text-primary font-[600]'>Copyright</Link>
              <Link to='#' className='text-primary font-[600]'>Terms of Use</Link>
            </div>
          </div>
          {/* <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-1'>
              <h2 className='text-secondary font-[600] mb-2'>Lorem</h2>
              <Link to='#' className='text-primary font-[600]'>Lorem Ipsum</Link>
              <Link to='#' className='text-primary font-[600]'>Lorem Ipsum</Link>
              <Link to='#' className='text-primary font-[600]'>Lorem Ipsum</Link>
              <Link to='#' className='text-primary font-[600]'>Lorem Ipsum</Link>
            </div>
            <div className='flex flex-col gap-1'>
              <h2 className='text-secondary font-[600] mb-2'>Lorem</h2>
              <Link to='#' className='text-primary font-[600]'>Lorem Ipsum</Link>
              <Link to='#' className='text-primary font-[600]'>Lorem Ipsum</Link>
              <Link to='#' className='text-primary font-[600]'>Lorem Ipsum</Link>
              <Link to='#' className='text-primary font-[600]'>Lorem Ipsum</Link>
            </div>
          </div> */}
          {/* <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-1'>
              <h2 className='text-secondary font-[600] mb-2'>Lorem</h2>
              <Link to='#' className='text-primary font-[600]'>Lorem Ipsum</Link>
              <Link to='#' className='text-primary font-[600]'>Lorem Ipsum</Link>
              <Link to='#' className='text-primary font-[600]'>Lorem Ipsum</Link>
              <Link to='#' className='text-primary font-[600]'>Lorem Ipsum</Link>
            </div>
            <div className='flex flex-col gap-1'>
              <h2 className='text-secondary font-[600] mb-2'>Lorem</h2>
              <Link to='#' className='text-primary font-[600]'>Lorem Ipsum</Link>
              <Link to='#' className='text-primary font-[600]'>Lorem Ipsum</Link>
              <Link to='#' className='text-primary font-[600]'>Lorem Ipsum</Link>
              <Link to='#' className='text-primary font-[600]'>Lorem Ipsum</Link>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
