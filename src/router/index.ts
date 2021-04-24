import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Index from "../views/index.vue";
// import todoList from '../views/todo-list.vue';
import swr from "../views/swr.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: Index,
    },
    {
        path: "/todo",
        name: "todo",
        component: () => import("../views/todo-list.vue"),
    },
    {
        path: "/swr",
        name: "swr",
        component: swr,
    },
];

// 在 Vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
    // 指定路由的模式,此处使用的是hash模式
    history: createWebHashHistory(),
    // 路由地址
    routes,
});
