import i18next, { ParseKeys } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { supportedLocale } from 'configs/language';
import { constants } from './constants';
import en from 'locales/en.json';
import ja from 'locales/ja.json';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import 'dayjs/locale/en';
import numeral from 'numeral';

export type Resource = typeof en & typeof ja;
export const defaultLng = supportedLocale.ja.lng;
export const defaultNS = 'translation';
export type I18Key = string &
  (ParseKeys<'translation', {}, undefined> | ParseKeys<'translation', {}, undefined>[] | undefined);

export const resources = {
  en: {
    translation: en,
  },
  ja: {
    translation: ja,
  },
} as const;

i18next.use(initReactI18next).init({
  interpolation: {
    escapeValue: false,
  },
  lng: localStorage.getItem(constants.LANGUAGE_STORAGE_KEY) || defaultLng,
  fallbackLng: defaultLng,
  resources,
});

export const loadLocaleLanguage = () => {
  const lng = localStorage.getItem(constants.LANGUAGE_STORAGE_KEY) || defaultLng;
  dayjs.locale(lng);
  numeral.locale(lng);
  i18next.addResourceBundle(
    lng,
    'translation',
    lng === supportedLocale.ja.lng ? supportedLocale.ja.lng : supportedLocale.en.lng,
  );
  i18next.changeLanguage(lng);
};

export default i18next;
