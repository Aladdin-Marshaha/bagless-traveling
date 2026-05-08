import { useApp } from '../contexts/AppContext'
import { useTranslation } from '../hooks/useTranslation'
import { useState } from 'react'
import logo from '../assets/Bagless-Traveling-logo.png'
import './Header.css'

function Header() {
  const { theme, language, toggleTheme, toggleLanguage } = useApp()
  const { t } = useTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="/bagless-traveling/" className="logo-link">
            <img src={logo} alt="Bagless Traveling" className="logo-img" />
          </a>
        </div>
        
        <nav className="header-nav">
          <a href="#about" className="nav-link">Om Oss</a>
          <a href="#contact" className="nav-link">Kontakta Oss</a>
        </nav>
        
        <div className="header-actions">
          <div className="header-social">
            <a href="https://facebook.com/baglesstravel" target="_blank" rel="noopener noreferrer" className="header-social-link">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://instagram.com/baglesstravel" target="_blank" rel="noopener noreferrer" className="header-social-link">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://tiktok.com/@baglesstravel" target="_blank" rel="noopener noreferrer" className="header-social-link">
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </div>
          
          <button 
            className="control-btn language-btn"
            onClick={toggleLanguage}
            title="Växla språk" 
          >
            {language === 'en' ? '🇸🇪 SV' : '🇺🇸 EN'}
          </button>
          
          <button 
            className="control-btn theme-btn"
            onClick={toggleTheme}
            title="Växla tema"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
        
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <nav className="mobile-nav">
              <a href="#about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Om Oss</a>
              <a href="#contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Kontakta Oss</a>
            </nav>
            
            <div className="mobile-social">
              <a href="https://facebook.com/baglesstravel" target="_blank" rel="noopener noreferrer" className="mobile-social-link">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://instagram.com/baglesstravel" target="_blank" rel="noopener noreferrer" className="mobile-social-link">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://tiktok.com/@baglesstravel" target="_blank" rel="noopener noreferrer" className="mobile-social-link">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
            
            <div className="mobile-controls">
              <button 
                className="mobile-control-btn"
                onClick={() => {toggleLanguage(); setIsMobileMenuOpen(false);}}
                title="Växla språk" 
              >
                {language === 'en' ? '🇸🇪 Byt till Svenska' : '🇺🇸 Switch to English'}
              </button>
              
              <button 
                className="mobile-control-btn"
                onClick={() => {toggleTheme(); setIsMobileMenuOpen(false);}}
                title="Växla tema"
              >
                {theme === 'light' ? '🌙 Mörkt Tema' : '☀️ Ljust Tema'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header