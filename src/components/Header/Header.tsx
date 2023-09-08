import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiX, HiMenu, HiHome, HiInformationCircle, HiAtSymbol } from 'react-icons/hi'

export default function Header() {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <div 
        className={`w-full h-full bg-[#000] opacity-30 fixed z-[1] top-0 left-0 ${expanded ? 'block' : 'hidden'} md:!hidden`}
        onClick={() => setExpanded(false)}
      />
      <header className='bg-shade'>
        <div className='container split gap-6 py-2'>
          <Link to='/'>
            <img 
              src='assets/images/White logo - no background.svg'
              className='max-w-[200px] sm:max-w-[300px] w-full'
            />
          </Link>
          <button className='md:hidden' onClick={() => setExpanded(true)}>
            <HiMenu className='text-primary w-[44px] h-[44px] p-2' />
          </button>
          <div className='header-nav' aria-expanded={expanded}>
            <button className='md:hidden self-start mb-4' onClick={() => setExpanded(false)}>
              <HiX className='text-primary w-[44px] h-[44px] p-2' />
            </button>
            <NavLink 
              to='/' 
              onClick={() => setExpanded(false)}
              className='max-md:nav-item md:secondary-button'>
              <HiHome className='md:hidden' />
              <span>Home</span>
            </NavLink>
            <NavLink 
              to='/about' 
              onClick={() => setExpanded(false)}
              className='max-md:nav-item md:secondary-button'>
              <HiInformationCircle className='md:hidden' />
              <span>About</span>
            </NavLink>
            <NavLink 
              to='/contact' 
              onClick={() => setExpanded(false)}
              className='max-md:nav-item md:primary-button'>
              <HiAtSymbol className='md:hidden' />
              <span>Contact</span>
            </NavLink>
          </div>
        </div>
      </header>
    </>
  )
}
