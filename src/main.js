import { createApp } from 'vue';
import * as veeValidate from 'vee-validate';
import App from './App.vue';
import router from './routes';
import store from './store';
import VueCookies from 'vue3-cookies';
import axios from 'axios';

import 'normalize.css';
import './assets/scss/_index.scss';
import './utils/validateRules.js';
import '@fortawesome/fontawesome-free/js/all.js';

const app = createApp(App)
app.config.globalProperties.$axios = axios;

app
  .use(VueCookies, {
    expiresTimes: "1h",
  })
  .use(store)
  .use(router)
  .use(veeValidate)
  .mount('#app')