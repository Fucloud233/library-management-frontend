import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store";

var routes = [
    {
        path: "/login",
        name: "login",
        component: () => import("../views/AdminLogin.vue"),
    },
];

// 自动添加主界面的路径
{
    const subpages = [
        "affair",
        "book",
        "violation",
        "admin",
        "reader",
        "readerRole",
    ];

    let mainPage = {
        path: "/",
        name: "main",
        component: () => import("../views/MainPage.vue"),
        children: [],
    };

    for (let subPage of subpages) {
        // 设置名字开头大写
        const filename = subPage[0].toLocaleUpperCase() + subPage.slice(1);
        // console.log(filename);
        mainPage.children.push({
            path: subPage,
            name: subPage,
            component: () =>
                import(`../components/subpages/main/${filename}.vue`),
        });
    }

    routes.push(mainPage);
}

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
