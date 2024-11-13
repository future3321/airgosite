import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Screenshots = () => {
  const { t } = useLanguage();

  const screenshots = [
    {
      title: t('screenshots.classic'),
      description: t('screenshots.classicDesc'),
      image: "https://raw.githubusercontent.com/future3321/WEBIMAGES/refs/heads/main/400x800bb_%E5%89%AF%E6%9C%AC.png"
    },
    {
      title: t('screenshots.timed'),
      description: t('screenshots.timedDesc'),
      image: "https://raw.githubusercontent.com/future3321/WEBIMAGES/refs/heads/main/400x800bb%20(1).png"
    },
    {
      title: t('screenshots.challenge'),
      description: t('screenshots.challengeDesc'),
      image: "https://raw.githubusercontent.com/future3321/WEBIMAGES/refs/heads/main/400x800bb%20(2).png"
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">{t('screenshots.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-white p-4 shadow-lg hover:shadow-xl transition-all">
              <div className="aspect-[9/16] rounded-lg overflow-hidden">
                <img
                  src={screenshot.image}
                  alt={screenshot.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{screenshot.title}</h3>
                <p className="text-gray-600">{screenshot.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Screenshots;
