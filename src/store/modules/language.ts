/*
* @Description: i18n
* @Author: Chetxu
* @Date: 2022-06-16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-23 15:36:41
*/
import Cookies from 'js-cookie';
import { createI18n } from 'vue-i18n';
import elementEnLocale from 'element-plus/lib/locale/lang/en';
import elementZhLocale from 'element-plus/lib/locale/lang/zh-cn';

import enLocale from '@/language/en';
import zhLocale from '@/language/zh-cn';

const langKey = 'i18nLang-key';

const messages = {
  'en': {
    ...enLocale,
    ...elementEnLocale,
  },
  'zh': {
    ...zhLocale,
    ...elementZhLocale,
  }
};

export const getCurrentLanguage = () => {
  return Cookies.get(langKey);
};


export const setCurrentLanguage = (lang: string) => {
  return Cookies.set(langKey, lang);
};

export const getLocale = () => {
  const cookieLanguage = getCurrentLanguage();
  if (cookieLanguage) {
    return cookieLanguage;
  }
  const language = navigator.language.toLowerCase();
  const locales = Object.keys(messages);
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale;
    }
  }
  return 'zh';
};

const i18n = createI18n({
  locale: getLocale(),
  messages: messages
});


export default i18n;
