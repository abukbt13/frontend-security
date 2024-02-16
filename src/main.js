import { createApp } from 'vue'


//bootstrap import
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueSweetalert2  from "sweetalert2";
//bootstrap icon import
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(router)

app.mount('#app')
