import { useTranslation } from '../hooks/useTranslation'
import aladdinImage from '../assets/Aladdin.png'
import kimImage from '../assets/Kim.png'
import shwethaImage from '../assets/Shwetha Rajesh - App Developer.png'
import swethaImage from '../assets/Swetha Chandrasekar- App Developer.png'
import kashfImage from '../assets/Kashf Panchmahaldar - App developer.png'
import sirajumImage from '../assets/SirajumMunira-Sofrware-development.png'
import tusharImage from '../assets/Engr. Tushar Kanjwani - AI Engineer.png'
import profileImage from '../assets/profile-img.webp'
import './About.css'

function About() {
  const { t } = useTranslation()
  
  // Team members data - lägg till dina teammedlemmar här
  const teamMembers = [
    {
      id: 1,
      name: "Kim Au",
      role: "CEO & Founder",
      image: kimImage,
      bio: ""
    },
    {
      id: 2,
      name: "Aladdin Marshaha", 
      role: "Software Engineer",
      image: aladdinImage, // Din bild från assets
      bio: ""
    },
    {
      id: 3,
      name: "Shwetha Rajesh",
      role: "App Developer",
      image: shwethaImage,
      bio: ""
    },
    {
      id: 4,
      name: "Swetha Chandrasekar",
      role: "App Developer",
      image: swethaImage,
      bio: ""
    },
    {
      id: 5,
      name: "Kashf U Sahar Panchmahaldar",
      role: "App Developer",
      image: kashfImage,
      bio: ""
    },
    {
      id: 6,
      name: "Sirajum Munira",
      role: "Software Developer",
      image: sirajumImage,
      bio: ""
    },
    {
      id: 7,
      name: "Magarita Popkova",
      role: "Team Member",
      image: profileImage, // Profile placeholder
      bio: ""
    },
    {
      id: 8,
      name: "Tushar Kanjwani",
      role: "AI Engineer",
      image: tusharImage,
      bio: ""
    }
  ]

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2>{t('about.title')}</h2>
          <p className="about-intro">{t('about.intro')}</p>
        </div>

        <div className="about-content">
          <div className="about-story">
            <h3>{t('about.story.title')}</h3>
            <p>{t('about.story.text1')}</p>
            <p>{t('about.story.text2')}</p>
          </div>

          <div className="about-mission">
            <h3>{t('about.mission.title')}</h3>
            <div className="mission-grid">
              <div className="mission-item">
                <div className="mission-icon">🌍</div>
                <h4>{t('about.mission.sustainability.title')}</h4>
                <p>{t('about.mission.sustainability.text')}</p>
              </div>
              <div className="mission-item">
                <div className="mission-icon">✈️</div>
                <h4>{t('about.mission.freedom.title')}</h4>
                <p>{t('about.mission.freedom.text')}</p>
              </div>
              <div className="mission-item">
                <div className="mission-icon">💡</div>
                <h4>{t('about.mission.innovation.title')}</h4>
                <p>{t('about.mission.innovation.text')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h3>{t('about.team.title')}</h3>
          <p className="team-intro">{t('about.team.intro')}</p>
          
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member">
                <div className="member-image">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                    />
                  ) : (
                    <div className="image-placeholder">
                      <span>📷</span>
                    </div>
                  )}
                </div>
                <div className="member-info">
                  <h4 className="member-name">{member.name}</h4>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-cta">
          <h3>{t('about.cta.title')}</h3>
          <p>{t('about.cta.text')}</p>
          <div className="cta-buttons">
            <button className="btn-primary">{t('about.cta.buttons.contact')}</button>
            <button className="btn-secondary">{t('about.cta.buttons.learn')}</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About