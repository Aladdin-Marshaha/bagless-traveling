import { useEffect, useRef, useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import './Solution.css'

function Solution() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
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

  // Auto-advance steps for demonstration
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 4)
      }, 6000)
      
      return () => clearInterval(interval)
    }
  }, [isVisible])

  const steps = [
    {
      number: t('solution.steps.step1.number'),
      title: t('solution.steps.step1.title'),
      description: t('solution.steps.step1.description'),
      icon: "🤖",
      visual: "ai-curation",
      benefits: [
        t('solution.steps.step1.benefits.benefit1'),
        t('solution.steps.step1.benefits.benefit2'),
        t('solution.steps.step1.benefits.benefit3')
      ]
    },
    {
      number: t('solution.steps.step2.number'), 
      title: t('solution.steps.step2.title'),
      description: t('solution.steps.step2.description'),
      icon: "🚚",
      visual: "delivery",
      benefits: [
        t('solution.steps.step2.benefits.benefit1'),
        t('solution.steps.step2.benefits.benefit2'),
        t('solution.steps.step2.benefits.benefit3')
      ]
    },
    {
      number: t('solution.steps.step3.number'),
      title: t('solution.steps.step3.title'), 
      description: t('solution.steps.step3.description'),
      icon: "✈️",
      visual: "arrival",
      benefits: [
        t('solution.steps.step3.benefits.benefit1'),
        t('solution.steps.step3.benefits.benefit2'),
        t('solution.steps.step3.benefits.benefit3')
      ]
    },
    {
      number: t('solution.steps.step4.number'),
      title: t('solution.steps.step4.title'),
      description: t('solution.steps.step4.description'),
      icon: "♻️",
      visual: "circular",
      benefits: [
        t('solution.steps.step4.benefits.benefit1'),
        t('solution.steps.step4.benefits.benefit2'),
        t('solution.steps.step4.benefits.benefit3')
      ]
    }
  ]

  return (
    <section className="solution" id="solution" ref={sectionRef}>
      <div className="solution-container">

        <div className={`solution-steps ${isVisible ? 'visible' : ''}`}>
          <div className="steps-nav">
            {steps.map((step, index) => (
              <button
                key={index}
                className={`step-nav-item ${index === activeStep ? 'active' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <span className="step-number">{step.number}</span>
                <span className="step-title">{step.title}</span>
              </button>
            ))}
          </div>

          <div className="step-content">
            <div className="step-visual">
              <div className={`visual-container ${steps[activeStep].visual}`}>
                <div className="step-icon">{steps[activeStep].icon}</div>
                <div className="visual-elements">
                  {activeStep === 0 && (
                    <div className="ai-brain">
                      <div className="neural-node"></div>
                      <div className="neural-node"></div>
                      <div className="neural-node"></div>
                      <div className="connection-line"></div>
                    </div>
                  )}
                  {activeStep === 1 && (
                    <div className="delivery-truck">
                      <div className="truck-body"></div>
                      <div className="truck-wheels">
                        <div className="wheel"></div>
                        <div className="wheel"></div>
                      </div>
                    </div>
                  )}
                  {activeStep === 2 && (
                    <div className="hotel-room">
                      <div className="bed"></div>
                      <div className="wardrobe"></div>
                      <div className="suitcase-crossed">🚫🧳</div>
                    </div>
                  )}
                  {activeStep === 3 && (
                    <div className="circular-flow">
                      <div className="flow-arrow"></div>
                      <div className="cleaning-symbol">🧽</div>
                      <div className="redistribution-symbol">📦</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="step-details">
              <div className="step-header">
                <span className="step-badge">Step {steps[activeStep].number}</span>
                <h3>{steps[activeStep].title}</h3>
              </div>
              <p>{steps[activeStep].description}</p>
              
              <div className="step-benefits">
                {steps[activeStep].benefits.map((benefit, index) => (
                  <div key={index} className="benefit">✅ {benefit}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution