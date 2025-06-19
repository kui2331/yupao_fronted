import { createApp } from 'vue'
import App from './App.vue'
import {Button, NavBar} from "vant";
import {createRouter, createWebHashHistory} from 'vue-router'
import routes from "./config/route.ts";

// 创建路由实例
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// 创建vue实例
const app = createApp(App)
app.use(router)
app.use(Button);
app.use(NavBar);
app.mount('#app')