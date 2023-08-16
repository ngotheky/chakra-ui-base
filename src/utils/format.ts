import dayjs, { ManipulateType, OpUnitType } from 'dayjs';
import ja from 'dayjs/locale/ja';
import numeral from 'numeral';

dayjs.locale({ ...ja, weekStart: 1 });
numeral.locale('ja');

export const changeLocale = (locale: string): void => {
  dayjs.locale(locale);
  numeral.locale(locale);
};

export const startOfTime = (date: Date | string | number, type?: OpUnitType): Date => {
  return dayjs(date)
    .startOf(type || 'days')
    .toDate();
};

export const addTime = (date: Date | string | number, count?: number, type?: ManipulateType): Date => {
  return dayjs(date)
    .add(count || 1, type || 'days')
    .toDate();
};

export const formatTime = (date: Date | string | number, format?: string): string => {
  return dayjs(date).format(format || 'YYYY-MM-DD');
};

export const formatNumber = (value = 0, format?: string): string => numeral(value).format(format || '0,0.[00]');
