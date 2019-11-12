<template>
    <footer>
        <router-link v-for="(item,index) in tabBars" 
            :key="index"
            :to="item.path"
            tag="div">
            <i :class="item.icon"></i>
            <p>{{item.text}}</p>
        </router-link>
    </footer>
</template>

<script>
export default {
    name:"tabbar",
    data(){
        return {
            tabBars:[
                {
                    text:"首页",
                    icon:"iconfont icon-41kongxinfangzi f_i",
                    path:"/home_page"
                },
                {
                    text:"分类",
                    icon:"iconfont icon-fenlei f_i",
                    path:"/sort"
                },
                {
                    text:"搜索",
                    icon:"iconfont icon-sousuo f_i",
                    path:"/search"
                },
                {
                    text:"我的",
                    icon:"iconfont icon-wode f_i",
                    path:"/mine"
                },
            ]
        }
    }
}
</script>

<style>
 /* 底部 */
        footer{
            height: .50rem;
            width: 100%;
            background: #fff;
            display: flex;
            position:fixed;
            bottom: 0;
            border-top:1px solid #ededed;
        }
        footer .f_i{
            font-size: .24rem;
        }
        footer div{
            height: .50rem;
            width: .90rem;
            display: flex;
            flex-direction:column;
            align-items: center;
        }
        footer div:nth-child(2) i{
            padding-top: 0.03rem;
        }
        footer div:nth-child(2) p{
            line-height: .14rem;
        }
        footer .router-link-active{
            color: #c33;
        }
</style>