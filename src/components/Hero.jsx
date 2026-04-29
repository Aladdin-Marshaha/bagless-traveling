import { useEffect, useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import './Hero.css'

function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        {/* Background animation elements */}
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
        <div className="floating-element element-4"></div>
        <div className="floating-element element-5"></div>
      </div>
      
      <div className="hero-container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero-title">
            <span className="title-main">{t('hero.titleMain')}</span>
            <span className="title-accent">{t('hero.titleAccent')}</span>
          </h1>
          
          <p className="hero-subtitle">
            {t('hero.subtitle')}
          </p>
          
          <div className="hero-actions">
            <button className="btn-hero-primary">
              {t('hero.primaryBtn')}
              <span className="btn-icon">→</span>
            </button>
            <button className="btn-hero-secondary">
              <span className="play-icon">▶</span>
              {t('hero.secondaryBtn')}
            </button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="app-interface">
                <div className="app-header">
                  <div className="status-bar"></div>
                  <div className="app-title">{t('hero.appDemo.title')}</div>
                </div>
                  <div className="app-content">
                  <div className="destination-card">
                    <div className="destination">{t('hero.appDemo.destination')}</div>
                    <div className="travel-info">
                      <div className="travel-date">
                        <span className="date-icon">📅</span>
                        <span>Dec 15-22</span>
                      </div>
                      <div className="weather-info">
                        <span className="weather-icon">🌤️</span>
                        <span>18°C Tokyo</span>
                      </div>
                    </div>
                    <div className="wardrobe-preview">
                      <div className="clothing-item shirt">
                        <span className="clothing-icon">👔</span>
                        <span className="clothing-label">Shirts</span>
                      </div>
                      <div className="clothing-item pants">
                        <span className="clothing-icon">👖</span>
                        <span className="clothing-label">Pants</span>
                      </div>
                      <div className="clothing-item shoes">
                        <span className="clothing-icon">👠</span>
                        <span className="clothing-label">Shoes</span>
                      </div>
                    </div>
                    <div className="delivery-status">
                      <span className="status-dot"></span>
                      {t('hero.appDemo.status')}
                    </div>
                  </div>
                  <div className="quick-stats">
                    <div className="stat-item">
                      <span className="stat-icon">✈️</span>
                      <span className="stat-text">Flight ready</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-icon">🎒</span>
                      <span className="stat-text">No baggage fees</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero