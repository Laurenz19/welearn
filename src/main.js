import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import './assets/css/main.css'
import '@iconscout/unicons/css/line.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
