import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Screenshots = () => {
  const { t } = useLanguage();

  const screenshots = [
    {
      title: t('screenshots.classic'),
      description: t('screenshots.classicDesc'),
      image: "https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/7e/0a/22/7e0a2268-0296-fcde-e6d3-f6b5b19c8b34/6e532b15-e30a-4404-b88a-56bef362ccf0_1.png/460x0w.webp"
    },
    {
      title: t('screenshots.timed'),
      description: t('screenshots.timedDesc'),
      image: "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/b5/f2/56/b5f256f1-35e1-c5de-0723-e0108b26310d/a6d7a382-b3f0-4dbb-9db2-ec83affb7639_6.5-3_2.png/460x0w.webp"
    },
    {
      title: t('screenshots.challenge'),
      description: t('screenshots.challengeDesc'),
      image: "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/40/df/bd/40dfbde9-08ec-3550-90f9-4d2feb8fcf15/db303137-ec18-4e44-9787-ef003bbcdc95_2.png/460x0w.webp"
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
