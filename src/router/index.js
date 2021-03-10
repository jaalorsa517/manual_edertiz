import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/capacitacion",
    name: "Capacitacion",
    component: () => import("../views/Capacitacion.vue")
  },
  {
    path: "/instalacion",
    name: "Instalacion",
    component: () => import("../views/Instalacion.vue")
  },
  {
    path: "/usuario",
    name: "Usuario",
    component: () => import("../views/Usuario.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
