import { createApp } from 'vue'
import App from './App.vue'
import Vant from "vant";
import {createRouter, createWebHistory} from 'vue-router'
import routes from "./config/route.ts";
import "vant/lib/index.css";
import './global.css'

// 创建路由实例
const router = createRouter({
    history: createWebHistory(),
    routes,
})

// 创建vue实例
const app = createApp(App)
app.use(router)
app.use(Vant)
app.mount('#app')