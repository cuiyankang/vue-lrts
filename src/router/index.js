import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            component:_=>import("../pages/home_page"),
            meta:{
                title:"首页"
            }
        },
        {
            path:"/mine",
            component:_=>import("../pages/mine"),
            meta:{
                title:"我的"
            }
        },
        {
            path:"/home_page",
            component:_=>import("../pages/home_page"),
            meta:{
                title:"首页"
            }
        },
        {
            path:"/sort",
            component:_=>import("../pages/sort"),
            meta:{
                title:"分类"
            }
        },
        {
            path:"/search",
            component:_=>import("../pages/search"),
            meta:{
                title:"搜索"
            }
        },
        {
            path:"/details",
            component:_=>import("../pages/details"),
            meta:{
                title:"书籍详情"
            }
        },
        {
            path:"/catalog",
            component:_=>import("../pages/catalog"),
            meta:{
                title:"目录"
            }
        }
    ],
    
})

export default router;
