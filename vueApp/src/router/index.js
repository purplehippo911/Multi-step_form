import { createRouter, createWebHistory } from "vue-router";
import Step_1 from "../views/Step_1.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Step_1,
    },
    {
      path: "/step-2",
      name: "step_2",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Step_2.vue"),
    },
  ],
});

export default router;
