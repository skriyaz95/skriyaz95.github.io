import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue'

import AnimateOnVisible from "./components/AnimateOnVisible.vue"
import VueTimeline from "@growthbunker/vuetimeline";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCopyright, faDownload, faFileAlt} from '@fortawesome/free-solid-svg-icons'
import {faFacebookSquare, faGithubSquare, faInstagramSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './styles/global.scss'

Vue.use(BootstrapVue)

Vue.use(VueTimeline);

library.add(faFileAlt, faCopyright, faDownload, faFacebookSquare, faInstagramSquare, faLinkedin, faGithubSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('AnimateOnVisible', AnimateOnVisible)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

