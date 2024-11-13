import React from 'react';
import { Gamepad, Trophy, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Gamepad className="h-8 w-8 text-gray-900" />,
      title: t('features.simpleControls'),
      description: t('features.simpleControlsDesc')
    },
    {
      icon: <Trophy className="h-8 w-8 text-gray-900" />,
      title: t('features.competition'),
      description: t('features.competitionDesc')
    },
    {
      icon: <Target className="h-8 w-8 text-gray-900" />,
      title: t('features.physics'),
      description: t('features.physicsDesc')
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">{t('features.title')}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-gray-50">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;