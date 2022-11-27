import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Crew from "../views/Crew.vue";
import technology from "../views/Technology.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Destination",
      name: "destination",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Destination.vue"),
    },
    {
      path: "/Crew",
      name: "crew",
      component: Crew,
    },
    {
      path: "/Technology",
      name: "technology",
      component: technology,
    },
  ],
});

export default router;
