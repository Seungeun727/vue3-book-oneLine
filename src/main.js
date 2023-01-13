import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/index';
import store from './store/index';
import VueCookies from 'vue3-cookies';

import 'normalize.css';
import './assets/scss/_index.scss';
import './utils/validateRules.js';
import '@fortawesome/fontawesome-free/js/all.js';

const app = createApp(App)

app
  .use(VueCookies, {
    expiresTimes: "1h",
  })
  .use(store)
  .use(router)
  .mount('#app')