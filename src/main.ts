import { createApp } from 'vue'
import App from './App.vue'
import "@/styles/app.css";
import "@/styles/index.scss";
import router from './router'
import i18n from './store/modules/language';
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import '../public/static/iconfont/iconfont.css'
import vue3PhotoPreview from 'vue3-photo-preview';
import 'vue3-photo-preview/dist/index.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import basicContainer from '@/components/globalContainer/container.vue'
import VueCookies from 'vue-cookies'


const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.component('container', basicContainer);
app.use(pinia).use(VueCookies)
app.use(i18n).use(vue3PhotoPreview).use(mavonEditor).use(router).mount('#app');







