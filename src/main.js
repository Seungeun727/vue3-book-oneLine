import { createApp } from 'vue';
import * as veeValidate from 'vee-validate';
import App from './App.vue';
import router from './routes';
import store from './store';
import VueCookies from 'vue3-cookies';
import axios from 'axios';

import 'normalize.css';
import './utils/validateRules.js';
import '@fortawesome/fontawesome-free/js/all.js';
import FontAwesomeIcon from './plugins/fontAwesomeIcon.js';

const app = createApp(App)
app.config.globalProperties.$axios = axios;

app
  .use(VueCookies, {
    expiresTimes: "1h",
  })
  .use(store)
  .use(router)
  .use(veeValidate)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .mount('#app')