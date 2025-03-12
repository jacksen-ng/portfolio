import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations';

/**
 * Custom hook to get translations based on the current language
 * @returns {Object} An object with the t function to get translations
 */
export const useTranslation = () => {
  const { language } = useLanguage();
  
  /**
   * Get a translation by key
   * @param {string} key - The translation key (dot notation, e.g. 'home.title')
   * @returns {string} The translated text
   */
  const t = (key) => {
    // Split the key by dots to access nested properties
    const keys = key.split('.');
    
    // Start with the translations for the current language
    let translation = translations[language];
    
    // Navigate through the nested properties
    for (const k of keys) {
      if (translation && translation[k] !== undefined) {
        translation = translation[k];
      } else {
        // If translation not found, return the key
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return translation;
  };
  
  return { t, language };
}; 