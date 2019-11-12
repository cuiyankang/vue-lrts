import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/home_page"
        },
        {
            path:"/mine",
            component:_=>import("../pages/mine")
        },
        {
            path:"/home_page",
            component:_=>import("../pages/home_page")
        },
        {
            path:"/sort",
            component:_=>import("../pages/sort")
        },
        {
            path:"/search",
            component:_=>import("../pages/search")
        },
        {
            path:"/details",
            component:_=>import("../pages/details")
        }
    ]
})

export default router;