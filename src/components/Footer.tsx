import React from 'react';
import { Github, Twitter, Instagram, Gamepad, Dribbble } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <img src="https://gitee.com/airgotech/image_storage/raw/master/logo1.png" alt="Air Basketball" className="h-8 w-10" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                {t('hero.title')}
              </span>
            </div>
            <p className="mt-4 text-gray-600 max-w-md">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              {t('footer.support')}
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="https://airgo.framer.ai/privacy-policy"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@airgo.tech"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t('footer.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">{t('footer.followUs')}</h3>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div> */}
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600">
            &copy; 2024 {t('AIRGO LIMITED')}. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
