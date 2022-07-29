import { createApp } from 'vue'
import App from './App.vue'
import "@/styles/app.css";
import "@/styles/index.scss";
import router from './router'
import elementPlus from 'element-plus';
import 'element-plus/es/components/message/style/css'
import i18n from './store/modules/language';
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import '../public/static/iconfont/iconfont.css'
import vue3PhotoPreview from 'vue3-photo-preview';
import 'vue3-photo-preview/dist/index.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import basicContainer from '@/components/globalContainer/container.vue'



const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.component('container', basicContainer);
app.use(pinia)
app.use(i18n).use(vue3PhotoPreview).use(mavonEditor).use(elementPlus, { i18n: i18n.global.t }).use(router).mount('#app');







