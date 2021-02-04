import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BookDetail from "../views/BookDetail.vue";
import TheMainContent from "../components/TheMainContent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/",
    name: "HomePage",
    component: Home,
    children: [
      {
        path: "/",
        name: "TheMainContent",
        component: TheMainContent
      },
      {
        path: "/book/:bookId",
        name: "BookDetail",
        component: BookDetail
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
