// imports

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView";

// routers

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      layout: "main",
      login: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
    meta: {
      layout: "login",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// check user is login

router.beforeEach((to, from, next) => {
  const userLogin = localStorage.userLogin;
  const requireLogin = to.matched.some((record) => record.meta.login);

  if (userLogin === "false" && requireLogin === true) {
    next("/login");
  } else {
    next();
  }
});

export default router;
