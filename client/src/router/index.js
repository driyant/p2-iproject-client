import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import InfoView from "../views/InfoView.vue";
// import TicketView from "../views/TicketView.vue";
import ContactView from "../views/ContactView.vue";
import SignUpView from "../views/SignUpView.vue";
import OrderDetailView from "../views/OrderDetailView.vue";
import LineUpView from "../views/LineUpView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/lineup",
      name: "lineup",
      component: LineUpView,
    },
    {
      path: "/ticket",
      name: "ticket",
      component: () => import("../views/TicketView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/info",
      name: "info",
      component: InfoView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUpView,
    },
    {
      path: "/order",
      name: "order",
      component: OrderDetailView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
