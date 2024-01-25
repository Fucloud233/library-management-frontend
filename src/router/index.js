import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store";

const routes = [
    {
        path: "/",
        name: "login",
        component: () => import("../views/AdminLogin.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});

router.beforeEach(async (to) => {
    const hasLogged = store.state.hasLogged;
    if (!hasLogged && to.name !== "login") {
        return { name: "login" };
    }
});

export default router;
