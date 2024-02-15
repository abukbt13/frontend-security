// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
//
// //bootstrap import
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import VueSweetalert2  from "sweetalert2";
// //bootstrap icon import
// import 'bootstrap-icons/font/bootstrap-icons.css';
// const app = createApp(App)
//
// app.use(router)
//
// app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Define your routes here
    ]
})

const app = createApp(App)

// Import Bootstrap CSS and JavaScript
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Bootstrap icons CSS
import 'bootstrap-icons/font/bootstrap-icons.css';

app.use(router)

app.mount('#app')

