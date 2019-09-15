import Vue from "vue";
import Router from "vue-router";
import defaultPage from "@/layout/defaultPage";
import blankPage from "@/layout/blank";
import index from "@/page/index";
import goodsList from "@/page/goodsList";
import changeCity from "@/page/changeCity";
import login from "@/page/login";
import register from "@/page/register";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "defaultPage",
      component: defaultPage,
      redirect: "/index",
      children: [{
          path: "s/:name",
          name: "goods",
          component: goodsList
        },
        {
          path: "/index",
          name: "index",
          component: index
        },
        {
          path: "/changeCity",
          name: "changeCity",
          component: changeCity
        }
      ]
    },
    {
      path: "/blank",
      name: "blankPage",
      component: blankPage,
      children: [{
        path: "/login",
        name: "login",
        component: login
      },{
        path: "/register",
        name: "register",
        component: register
      }]
    }
  ]
});