import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

// 通过use 将 路由插件安装到 app 中
let isAuthenticated = true;
router.beforeEach(() => isAuthenticated);
app.use(router);
app.use(pinia);
app.mount("#app");
