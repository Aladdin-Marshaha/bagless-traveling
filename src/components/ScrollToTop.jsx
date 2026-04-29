import { useState, useEffect } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import './ScrollToTop.css'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslation()

  // Visa knappen när användaren scrollar ner
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Scrolla till toppen
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label={t('common.scrollToTop')}
          title={t('common.scrollToTop')}
        >
          <span className="scroll-arrow">↑</span>
        </button>
      )}
    </>
  )
}

export default ScrollToTop