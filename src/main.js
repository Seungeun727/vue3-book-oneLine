import { createApp } from 'vue'
import * as veeValidate from 'vee-validate';
import App from './App.vue'
import router from './routes'
import store from './store'
import axios from 'axios'

const app = createApp(App)
app.config.globalProperties.$axios = axios;

app
  .use(router)
  .use(store)
  .use(veeValidate)
  .mount('#app')