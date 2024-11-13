import React from 'react';
import { Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80"
          alt="Basketball Court"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white to-white/90"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <img src="https://gitee.com/airgotech/image_storage/raw/master/logo1.png" alt="Air Basketball" className="w-24 h-22" />
        </div>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
          {t('hero.title')}
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://apps.apple.com/cn/app/%E7%A9%BA%E6%B0%94%E6%8A%95%E7%AF%AE/id1625289361"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors"
          >
            <Download className="mr-2 h-5 w-5" />
            {t('hero.downloadButton')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
