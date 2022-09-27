/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/app.css'
import '@/styles/index.scss'
import router from './router'
import i18n from './store/modules/language'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import '../public/static/iconfont/iconfont.css'
import vue3PhotoPreview from 'vue3-photo-preview'
import 'vue3-photo-preview/dist/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import basicContainer from '@/components/globalContainer/container.vue'
import alert from '@/components/alert/alert.vue'
import VueCookies from 'vue-cookies'
import { mouse } from '@/utils/mouseClick'
import 'music-chet-vue/dist/style.css'
import { judgment } from '@/utils/judgment'

const homeJudgment = judgment()
if (homeJudgment === 'pc') {
	mouse()
}

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)
app.component('Container', basicContainer)
app.component('Alert', alert)
app.use(pinia).use(VueCookies)
app.use(i18n).use(vue3PhotoPreview).use(mavonEditor).use(router)
app.mount('#app')
router.afterEach(() => {
	window.scrollTo(0, 0)
})
