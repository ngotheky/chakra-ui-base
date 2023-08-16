import IcJa from 'assets/icons/flags/ja.png';
import IcUs from 'assets/icons/flags/us.png';

export const supportedLocale = {
  ja: {
    name: 'Japanese',
    lng: 'ja',
    flag: IcJa,
  },
  en: {
    name: 'English',
    lng: 'en',
    flag: IcUs,
  },
};

export const supportedLanguage = [supportedLocale.en, supportedLocale.ja];
