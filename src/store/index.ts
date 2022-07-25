import { defineStore } from 'pinia';
import { getCurrentLanguage, setCurrentLanguage } from './modules/language';

const useLanguage = defineStore({
  id: 'language-pinia',
  state: () => ({
    language: <string>{},
    themeColor: <string>{},
  }),

  getters: {
    getLanguage(): string {
      this.language = getCurrentLanguage() + "";
      return this.language;
    }
  },
  actions: {
    setLanguage(str: string) {
      this.language = str;
      setCurrentLanguage(this.language);
    },
    setthemeColor(str: string) {
      this.themeColor = str;
    }
  },
  persist: {
    key: 'storekey', //缓存key
    storage: window.sessionStorage, //缓存方式
    // 部分持久化状态的点符号路径数组，默认持久化所有数据 
    paths: ['language', 'themeColor'],  //持久化counter 字段
  },
});

export default useLanguage;
