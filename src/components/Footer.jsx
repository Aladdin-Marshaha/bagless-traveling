import { useTranslation } from '../hooks/useTranslation'
import logo from '../assets/Bagless-Traveling-logo.png'
import './Footer.css'

function Footer() {
  const { t } = useTranslation()
  
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="/bagless-traveling/" className="footer-logo-link">
              <img src={logo} alt="Bagless Travel" className="footer-logo" />
            </a>
            <p>{t('footer.brand.tagline')}</p>
            <p className="tagline">{t('footer.brand.slogan')}</p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>{t('footer.links.airlines.title')}</h4>
              <a href="#">{t('footer.links.airlines.pilot')}</a>
              <a href="#">{t('footer.links.airlines.package')}</a>
            </div>
            
            <div className="link-group">
              <h4>{t('footer.links.company.title')}</h4>
              <a href="#">{t('footer.links.company.about')}</a>
              <a href="#">{t('footer.links.company.careers')}</a>
              <a href="#">{t('footer.links.company.investors')}</a>
            </div>
          </div>
          
          <div className="footer-cta">
            <h4>{t('footer.cta.title')}</h4>
            <p>{t('footer.cta.description')}</p>
            <div className="footer-actions">
              <button className="btn-footer-secondary">{t('footer.cta.buttons.partner')}</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-legal">
            <p>{t('footer.legal.copyright')}</p>
            <div className="legal-links">
              <a href="#">{t('footer.legal.privacy')}</a>
              <a href="#">{t('footer.legal.terms')}</a>
              <a href="#">{t('footer.legal.cookies')}</a>
            </div>
          </div>
          
          <div className="footer-social">
            <a href="https://facebook.com/baglesstravel" target="_blank" rel="noopener noreferrer" className="social-link">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://instagram.com/baglesstravel" target="_blank" rel="noopener noreferrer" className="social-link">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://tiktok.com/@baglesstravel" target="_blank" rel="noopener noreferrer" className="social-link">
              <i class="fa-brands fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-highlight">
        <div className="highlight-content">
          <span className="highlight-text">
            {t('footer.highlight')}
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer