import { useEffect, useRef, useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import './Benefits.css'

function Benefits() {
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

  // Get translated benefits data
  const travelerBenefits = t('benefits.travelers')

  return (
    <section className="benefits" id="benefits" ref={sectionRef}>
      <div className="benefits-container">
        <div className={`benefits-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">
            <span className="highlight">{t('benefits.title')}</span>
          </h2>
          <p className="section-subtitle">
            {t('benefits.subtitle')}
          </p>
        </div>

        <div className={`benefits-content ${isVisible ? 'visible' : ''}`}>
          <div className="benefits-grid travelers-grid">
            {travelerBenefits.map((benefit, index) => (
              <div key={index} className="benefit-card traveler-card">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits