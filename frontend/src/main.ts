import { createApp } from 'vue';
import  ElementPlus  from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './style.css';
import App from './App.vue';
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia';
import router from './router';

const pinia = createPinia();

const app = createApp(App);

app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(pinia);
app.use(router);

app.mount('#app');
