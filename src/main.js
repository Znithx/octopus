import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElIcon from '@element-plus/icons-vue'; 
// 导入 Element Plus 的图标组件

const app = createApp(App);

// 使用 Element Plus 和路由
app.use(router);
app.use(ElementPlus);

// 将图标组件注册到全局
Object.keys(ElIcon).forEach((key) => {
  app.component(key, ElIcon[key]);
});

// 挂载应用
app.mount('#app');
