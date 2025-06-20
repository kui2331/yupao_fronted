import { createApp } from 'vue'
import App from './App.vue'
import Vant from "vant";
import {createRouter, createWebHashHistory} from 'vue-router'
import routes from "./config/route.ts";
import "vant/lib/index.css";

// 创建路由实例
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// 创建vue实例
const app = createApp(App)
app.use(router)
app.use(Vant)
app.mount('#app')