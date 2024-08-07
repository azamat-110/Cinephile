import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/style/main.scss'

import {createPinia} from 'pinia';
import router from '@/router/router'

const pinia = createPinia();


createApp(App).use(pinia).use(router).mount('#app');
