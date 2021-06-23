import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BookDetail from "../views/BookDetail.vue";
import AddNewBook from "../views/AddNewBook.vue";
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
        path: "/book/:route",
        name: "BookDetail",
        component: BookDetail
      },
      {
        path: "/add-new-book",
        name: "AddNewBook",
        component: AddNewBook
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
