import 'i18next';
import { resources, defaultNS } from '../utils/i18next';

type Language = 'en' | 'ja';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof resources)['ja'];
  }
}
