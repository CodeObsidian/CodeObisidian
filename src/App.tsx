import Header from 'components/Header/Header.tsx'
import Homepage from 'pages/Homepage/Homepage.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'context/ThemeContext'
import Footer from 'components/Footer/Footer'
import Animations from 'components/Animations/Animations'
import About from 'pages/About/About'
import Contact from 'pages/Contact/Contact'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.animate-in', {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'expo.inOut',
        stagger: 0.1
      })

      gsap.fromTo('.glow', {
        opacity: 0
      }, {
        opacity: 0.3,
        duration: 1,
        delay: 1,
        ease: 'power2.out'
      })

      const inScreenElems = document.getElementsByClassName('animate-in-screen')

      let i = 0
      for(const elem of inScreenElems) {
        gsap.fromTo(elem, {
          opacity: 0,
          y: 50
        }, {
          opacity: 1,
          y: 0,
          ease: 'expo.inOut',
          duration: 1,
          delay: 0.1 * i,
          scrollTrigger: {
            trigger: elem,
            start: '80px bottom'
          }
        })
        i++
      }
    })

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route element={<Animations />}>
            <Route path='/' element={<Homepage />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
