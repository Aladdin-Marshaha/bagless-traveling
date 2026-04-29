import { useTranslation } from '../hooks/useTranslation'
import './About.css'

function About() {
  const { t } = useTranslation()
  
  // Team members data - lägg till dina teammedlemmar här
  const teamMembers = [
    {
      id: 1,
      name: "Anna Andersson",
      role: "CEO & Grundare",
      image: "/team/anna.jpg", // Lägg till bilder i public/team/ mappen
      bio: "Passionerad resenär med 10+ års erfarenhet inom turismbranschen"
    },
    {
      id: 2,
      name: "Erik Johansson", 
      role: "CTO",
      image: "/team/erik.jpg",
      bio: "Tech-expert som utvecklar innovativa lösningar för moderna resenärer"
    },
    {
      id: 3,
      name: "Maria Silva",
      role: "Head of Operations",
      image: "/team/maria.jpg",
      bio: "Operativ chef som säkerställer att varje resa blir oförglömlig"
    },
    {
      id: 4,
      name: "Johan Berg",
      role: "Customer Experience Manager",
      image: "/team/johan.jpg",
      bio: "Dedikerad till att skapa exceptionella kundupplevelser"
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
                  <img 
                    src={member.image} 
                    alt={member.name}
                    onError={(e) => {
                      // Fallback till placeholder om bilden inte finns
                      e.target.src = `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&auto=format&q=80`
                    }}
                  />
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