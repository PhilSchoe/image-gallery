import { createApp } from 'vue';
import { createPinia } from 'pinia';
import createVuetify from '@/plugins/vuetify';

import App from './App.vue';
import router from './router';

import { worker } from './mocks/browser';

worker.start();

const app = createApp(App);

app.use(createVuetify);
app.use(createPinia());
app.use(router);

app.mount('#app');
