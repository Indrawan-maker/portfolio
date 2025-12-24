// components/ScrollbarStyles.tsx
'use client'
import { useEffect, useState } from 'react'

export default function ScrollbarStyles() {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const style = document.createElement('style')
    document.head.appendChild(style)

    // Function untuk update scrollbar visibility
    const updateScrollbar = (visible: boolean) => {
      style.innerHTML = `
        html {
          background: #000000;
        }
        
        body {
          background: #000000;
        }
        
        html::-webkit-scrollbar {
          width: ${visible ? '20px' : '0px'} !important;
          transition: width 0.3s ease;
          background-color: transparent !important;
        }
        
        html::-webkit-scrollbar-track {
          background-color: transparent !important;
        }
        
        html::-webkit-scrollbar-thumb {
          background-color: #A374FF !important;
          border-radius: 10px !important;
        }
        
        html {
          scrollbar-width: ${visible ? 'auto' : 'none'} !important;
          scrollbar-color: #A374FF transparent !important;
        }
      `
    }

    // Initial: hidden
    updateScrollbar(false)

    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      setIsScrolling(true)
      updateScrollbar(true)

      // Clear timeout sebelumnya
      clearTimeout(scrollTimeout)

      // Hide scrollbar setelah 1.5 detik gak scroll
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
        updateScrollbar(false)
      }, 10000)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
      document.head.removeChild(style)
    }
  }, [])

  return null
}