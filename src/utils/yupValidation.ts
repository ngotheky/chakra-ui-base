import i18next from 'i18next';
import * as yup from 'yup';
import {
  CODE_MAX_LENGTH,
  CODE_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  PHONE_MAX_LENGTH,
  PHONE_MIN_LENGTH,
  REGEX_EMAIL,
  REGEX_KANJI,
  REGEX_KATAKANA,
  REGEX_NAME,
  REGEX_PASSWORD,
  REGEX_PHONE,
  USERNAME_MAX_LENGTH,
  USERNAME_MIN_LENGTH,
  ZIP_CODE_MAX_LENGTH,
  ZIP_CODE_MIN_LENGTH,
} from './validation';
import { I18Key } from './i18next';

const yupValidate = {
  stringRequired: (requiredString: I18Key) => yup.string().required(() => i18next.t(requiredString)),
  name: () =>
    yup
      .string()
      .required(i18next.t('error.fieldRequired'))
      .trim(i18next.t('error.nameInvalid'))
      .matches(REGEX_NAME, i18next.t('error.nameInvalid'))
      .strict(true)
      .min(USERNAME_MIN_LENGTH, i18next.t('error.nameTooShort'))
      .max(USERNAME_MAX_LENGTH, i18next.t('error.nameTooLong')),
  zipCode: () =>
    yup
      .string()
      .required(i18next.t('error.fieldRequired'))
      .matches(/\d+/g, i18next.t('error.zipCodeError'))
      .min(ZIP_CODE_MAX_LENGTH, i18next.t('error.zipCodeError'))
      .max(ZIP_CODE_MIN_LENGTH, i18next.t('error.zipCodeError')),
  nameFree: () =>
    yup
      .string()
      .required(i18next.t('error.fieldRequired'))
      .trim(i18next.t('error.nameInvalid'))
      .strict(true)
      .min(USERNAME_MIN_LENGTH, i18next.t('error.nameTooShort'))
      .max(USERNAME_MAX_LENGTH, i18next.t('error.nameTooLong')),
  nameKatakana: () =>
    yup
      .string()
      .required(() => i18next.t('error.fieldRequired'))
      .trim(i18next.t('error.nameInvalid'))
      .matches(REGEX_KATAKANA, i18next.t('error.katakanaNameInvalid'))
      .strict(true)
      .min(USERNAME_MIN_LENGTH, i18next.t('error.nameTooShort'))
      .max(USERNAME_MAX_LENGTH, i18next.t('error.nameTooLong')),
  nameKanji: () =>
    yup
      .string()
      .required(() => i18next.t('error.fieldRequired'))
      .trim(i18next.t('error.nameInvalid'))
      .matches(REGEX_KANJI, i18next.t('error.nameInvalid'))
      .strict(true)
      .min(USERNAME_MIN_LENGTH, i18next.t('error.nameTooShort'))
      .max(USERNAME_MAX_LENGTH, i18next.t('error.nameTooLong')),
  email: () =>
    yup
      .string()
      .required(() => i18next.t('error.fieldRequired'))
      .email(i18next.t('error.emailInvalid'))
      .matches(REGEX_EMAIL, i18next.t('error.emailInvalid')),
  birthday: () => yup.string().required(() => i18next.t('error.fieldRequired')),
  code: () =>
    yup
      .string()
      .required(() => i18next.t('error.fieldRequired'))
      .trim()
      .matches(/^[A-Za-z0-9]+$/, i18next.t('error.codeInvalid'))
      .strict(true)
      .min(CODE_MIN_LENGTH, i18next.t('error.codeTooShort'))
      .max(CODE_MAX_LENGTH, i18next.t('error.codeTooLong')),

  avatar: () => yup.string().required(() => i18next.t('error.fieldRequired')),
  number: () => yup.number(),
  phone: () =>
    yup
      .string()
      .required(i18next.t('error.fieldRequired'))
      .matches(REGEX_PHONE, i18next.t('error.phoneInvalid'))
      .min(PHONE_MIN_LENGTH, i18next.t('error.phoneInvalid'))
      .max(PHONE_MAX_LENGTH, i18next.t('error.phoneInvalid')),
  phoneNotRequired: () =>
    yup.lazy((string) =>
      string.length
        ? yup
            .string()
            .min(PHONE_MIN_LENGTH, i18next.t('error.phoneInvalid'))
            .max(PHONE_MAX_LENGTH, i18next.t('error.phoneInvalid'))
            .matches(REGEX_PHONE, i18next.t('error.phoneInvalid'))
        : yup.string(),
    ),
  url: () =>
    yup
      .string()
      .url(i18next.t('error.urlInvalid'))
      .required(() => i18next.t('error.urlInvalid'))
      .trim(),
  /**
   * @param ref : the name of StyledInputForm want to compare
   * @param isMatchCurrentPassword
   * password() : input password
   * password(ref) : input passwordConfirm, have to be the same with password
   * password(ref, false) : input newPassword, have not to be the same with currentPassword
   */
  password: (ref?: string, isMatchCurrentPassword = true): any => {
    if (ref) {
      // NEW PASSWORD
      if (!isMatchCurrentPassword)
        return yupValidate.password().not([yup.ref(ref), null], i18next.t('error.duplicatePassword'));

      // CONFIRM PASSWORD
      return yup
        .string()
        .required(() => i18next.t('error.fieldRequired'))
        .oneOf([yup.ref(ref)], i18next.t('error.passwordNotMatch'));
    }

    return yup
      .string()
      .required(() => i18next.t('error.fieldRequired'))
      .trim(i18next.t('error.trimSpace'))
      .strict(true)
      .min(PASSWORD_MIN_LENGTH, i18next.t('error.passwordTooShort', { count: PASSWORD_MIN_LENGTH }))
      .max(PASSWORD_MAX_LENGTH, i18next.t('error.passwordTooLong', { count: PASSWORD_MAX_LENGTH }))
      .matches(REGEX_PASSWORD, i18next.t('error.validatePassword'));
  },
};

export default yupValidate;
