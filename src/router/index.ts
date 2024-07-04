import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Lesson1 from "@/0_lessons/Lesson1.vue";
import Lesson2 from "@/0_lessons/Lesson2.vue";
import Lesson3 from "@/0_lessons/Lesson3.vue";
import Impressum from "@/views/Impressum.vue";
import LegalDisclosure from "@/views/LegalDisclosure.vue";
import Datenschutz from "@/views/Datenschutz.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Lesson1,
  },
  {
    path: '/datenschutz',
    name: 'Datenschutz',
    component: Datenschutz,
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: Impressum,
  },
  {
    path: '/legaldisclosure',
    name: 'Legal Disclosure',
    component: LegalDisclosure,
  },
  {
    path: '/privacypolicy',
    name: 'Privacy Policy',
    component: PrivacyPolicy,
  },
  {
    path: "/lesson2",
    name: "lesson2",
    component: Lesson2,
  },
  {
    path: "/lesson3",
    name: "lesson3",
    component: Lesson3,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
