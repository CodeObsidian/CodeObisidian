import { gsap } from 'gsap';
import { useEffect, useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom';

export default function Animations() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])

  useLayoutEffect(() => {
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
  }, [location])

  return (
    <Outlet />
  )
}
