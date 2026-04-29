import { useApp } from '../contexts/AppContext'
import { translations } from '../utils/translations'

export function useTranslation() {
  const { language } = useApp()
  
  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }
  
  return { t, language }
}