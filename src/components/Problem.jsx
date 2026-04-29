import { useEffect, useRef, useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import './Problem.css'

function Problem() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const { t } = useTranslation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="problem" id="problem" ref={sectionRef}>
      <div className="problem-container">
        <div className={`problem-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">
            {t('problem.title')}
          </h2>
          <p className="section-subtitle">
            {t('problem.subtitle')}
          </p>
        </div>

        <div className={`problems-grid ${isVisible ? 'visible' : ''}`}>
          {/* Simple content focus - no complex stats or details */}
        </div>
      </div>
    </section>
  )
}

export default Problem