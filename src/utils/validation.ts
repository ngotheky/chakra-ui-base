export const REGEX_EMAIL =
  /^(([^<>()[\]\\x.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const REGEX_NAME = /^[ぁ-んァ-ン一-龥aA-zZ ]+$/;
export const REGEX_KANJI = /^[一-龥]+$/;
export const REGEX_PHONE = /^(843|090|080|070|060)\d{0,8}$/;
export const REGEX_NUMBER = /[^0-9]/g;
export const REGEX_PHONE_LOGIN = /^(090|080|070|060)/;
export const REGEX_PHONE_LOGIN_11 = /\d{0,8}$/;
export const REGEX_PASSWORD = /^[aA-zZ0-9]+$/;
export const REGEX_KATAKANA = /^[\u30A0-\u30FF\u3005]+$/i;

export const MAX_LENGTH_SEARCH = 50;

export const USERNAME_MIN_LENGTH = 1;
export const USERNAME_MAX_LENGTH = 255;

export const CODE_MIN_LENGTH = 1;
export const CODE_MAX_LENGTH = 20;

export const PHONE_MIN_LENGTH = 11;
export const PHONE_MAX_LENGTH = 11;

export const ZIP_CODE_MIN_LENGTH = 7;
export const ZIP_CODE_MAX_LENGTH = 7;

export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 17;
