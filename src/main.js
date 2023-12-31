

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//bootsrap import
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//bootstrap icon import
import 'bootstrap-icons/font/bootstrap-icons.css';
const app = createApp(App)

app.use(router)

app.mount('#app')
