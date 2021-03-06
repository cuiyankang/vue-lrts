import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:'/home_page',
            meta:{
                title:"首页",
                flg:true
            }
        },
        {
            name:"mine",
            path:"/mine",
            component:_=>import("../pages/mine"),
            meta:{
                title:"我的",
                flg:true
            }
        },
        {
            name:"member",
            path:"/member",
            component:_=>import("../pages/member"),
            meta:{
                title:"会员专区",
                flg:true
            }
        },
        {
            path:"/home_page",
            component:_=>import("../pages/home_page"),
            meta:{
                title:"首页",
                flg:true

            }
        },
        {
            path:"/sort",
            component:_=>import("../pages/sort"),
            meta:{
                title:"分类",
                flg:true
            }
        },
        {
            path:"/search",
            component:_=>import("../pages/search"),
            meta:{
                title:"搜索",
                flg:false
            }
        },
        {   
            name:'details',
            path:"/details",
            component:_=>import("../pages/details"),
            meta:{
                title:"书籍详情",
                flg:true
            },
            children:[
                {
                    name:"dl",
                    path:"dl",
                    component:_=>import("../pages/dl"),
                    meta:{
                        title:"书籍详情",
                        flg:true
                    },
                },
                {
                    name:"cl",
                    path:"cl",
                    component:_=>import("../pages/cl"),
                    meta:{
                        title:"书籍详情",
                        flg:true
                    },
                }                
            ]
        },
        {
            path:"/catalog",
            component:_=>import("../pages/catalog"),
            meta:{
                title:"目录",
                flg:true

            }
        },
        {
            path:"/program",
            component:_=>import("../pages/program"),
            meta:{
                title:"节目详情",
                flg:true
            }
        },
        {
            name:'login',
            path:'/login',
            component:_=>import("../pages/login"),
            meta:{
                title:"登陆",
                flg:false
            }
        },
        {
            name:'register',
            path:'/register',
            component:_=>import("../pages/register"),
            meta:{
                title:"注册",
                flg:false
            }
        },
        {
            name:'boutique',
            path:'/boutique',
            component:_=>import("../pages/boutique"),
            meta:{
                title:"付费精品",
                flg:true
            }
        },
        {
            name:'anchor',
            path:'/anchor',
            component:_=>import("../pages/anchor"),
            meta:{
                title:"主播",
                flg:true
            }
        },
        {
            name:'user',
            path:'/user',
            component:_=>import("../pages/user"),
            meta:{
                title:"个人主页",
                flg:true
            },
            children:[
                {
                    name:"principal",
                    path:"principal",
                    component:_=>import("../pages/principal"),
                    meta:{
                        title:"个人主页",
                        flg:true
                    },
                },
                {
                    name:"follow",
                    path:"follow",
                    component:_=>import("../pages/follow"),
                    meta:{
                        title:"个人主页",
                        flg:true
                    },
                },
                {
                    name:"fans",
                    path:"fans",
                    component:_=>import("../pages/fans"),
                    meta:{
                        title:"个人主页",
                        flg:true
                    },
                }                 
            ]
        }
    ],
    
})

export default router;
