import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
      className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
    >
      <Globe className="h-5 w-5" />
      <span>{language.toUpperCase()}</span>
    </button>
  );
};

export default LanguageSwitcher;