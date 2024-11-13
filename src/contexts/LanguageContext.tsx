import React, { createContext, useContext, useState } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  zh: {
    'nav.home': '主页',
    'nav.features': '特点',
    'nav.screenshots': '截图',
    'nav.download': '下载',
    'hero.title': '空气投篮',
    'hero.subtitle': '体感识别空气投篮模拟器',
    'hero.downloadButton': '立即下载',
    'features.title': '功能特色',
    'features.simpleControls': '体感识别',
    'features.simpleControlsDesc':
      '佩戴Apple Watch，通过捕捉用户投篮动作，模拟投篮入网声效',
    'features.competition': 'AR增强现实',
    'features.competitionDesc':
      '沉浸式的体感操作，配合声效动画打破虚拟和现实的边界',
    'features.physics': '拓展手势',
    'features.physicsDesc': '摩托、高尔夫、飞盘、手枪等多种手势玩法，不断更新',
    'screenshots.title': '产品截图',
    'screenshots.classic': '空气投篮，成真了',
    'screenshots.classicDesc': '体验传统投篮的乐趣',
    'screenshots.timed': '开启声音增强现实世界',
    'screenshots.timedDesc': '更多体感动作，更多手势玩法',
    'screenshots.challenge': '随时随地，解压神器',
    'screenshots.challengeDesc': '灵机一动，快乐就是这么简单',
    'footer.description': '无论你在哪里，一秒回到球场。',
    'footer.support': '支持',
    'footer.faq': '常见问题',
    'footer.privacy': '隐私政策',
    'footer.terms': '用户协议',
    'footer.contact': '联系我们',
    'footer.followUs': '关注我们',
    'footer.rights': '版权所有',
  },
  en: {
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.screenshots': 'Screenshots',
    'nav.download': 'Download',
    'hero.title': 'Air Basketball',
    'hero.subtitle': 'Motion-Sensing Air Basketball Simulator',
    'hero.downloadButton': 'Download Now',
    'features.title': 'Features',
    'features.simpleControls': 'Motion Sensing',
    'features.simpleControlsDesc':
      'Wear an Apple Watch to capture shooting motions, simulating the sound of scoring',
    'features.competition': 'AR Augmented Reality',
    'features.competitionDesc':
      'Immersive motion-sensing experience with sound effects and animations that blur the line between virtual and reality',
    'features.physics': 'Extended Gestures',
    'features.physicsDesc':
      'Multiple gesture play modes like motorbike, golf, frisbee, handgun, and more, constantly updated',
    'screenshots.title': 'Screenshots',
    'screenshots.classic': 'Air Basketball, Realized',
    'screenshots.classicDesc': 'Experience the fun of classic shooting',
    'screenshots.timed': 'Activate the Sound-Enhanced Reality World',
    'screenshots.timedDesc': 'More motion-sensing actions, more gesture play',
    'screenshots.challenge': 'De-stress Anytime, Anywhere',
    'screenshots.challengeDesc': 'A moment of inspiration, joy made simple',
    'footer.description':
      'Wherever you are, return to the court in an instant.',
    'footer.support': 'Support',
    'footer.faq': 'FAQ',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.contact': 'Contact Us',
    'footer.followUs': 'Follow Us',
    'footer.rights': 'All rights reserved',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)['zh']] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
