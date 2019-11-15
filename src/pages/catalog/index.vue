<template>
    <main>
        <div class="book_desc">
        <div class="book">
            <img src="https://enugcpic.lrts.me/FpLE4QLzS0ucb9av6DqGPGkPtoHJ?imageMogr/v2/auto-orient/thumbnail/x180/crop/!180x180a0a0&sign=3d057b088f03c4e8588757928f1ced84&t=5dd3c318" alt="">
        </div>
        <div class="book01">
            <div class="book001">爱车天天汇</div>
                <div class="book02">
                    <div>汽车 | 爱车天天汇 播</div>
                    <div>爱车天天汇 上传</div>
                    <div>已连载256期  49.6万播放</div>
                </div>
        </div>
    </div>
    <!-- 目录 -->
    <div class="nav">
            <li>详情</li>
            <li>目录</li>
    </div>
        <div class="ml">
            <p>共256集</p>
            <p>选集</p>
        </div>
        <div class="zhangjie">
                <p class="title" v-for="(item,index) in list" :key="index">{{item.name}}</p>
        </div>
    </main>
</template>

<script>
import { movienowApi } from "../../api/movie"
export default {
    name:"Catalog",
    data(){
        return {
            list:[]
        }
    },
   created(){
       this.handleGetMovieList()
    },
    methods:{
      async handleGetMovieList(){
        if(!sessionStorage.getItem("list")){
            let data = await movienowApi();
            this.list = data.list;
            sessionStorage.setItem("list",JSON.stringify(data.list))
        }else{
            this.list = JSON.parse(sessionStorage.getItem("list"));
        }
      }
    }
}
</script>

<style>
/* 主体 */
        li{
            list-style: none;
        }
        main{
            overflow: auto;
            position:absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            padding-bottom: .50rem;
            padding-top: .42rem;
        }
        .book_desc{
            display: flex;
            flex-direction: row;
            padding: .2rem .2rem .2rem .13rem;
            background-color: #fff;
            z-index: 2;
            border-bottom: 10px solid #ccc;
        }
        .book img{
           
            width: 1.06rem;
            height: 1.06rem;
        }
        .book01{
            position: relative;
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            flex: 1;
            margin-left: .14rem;
            line-height: 0.27rem;
             
        }
        .book001 {
            font-size: .18rem;
        }
        .book02 {
            font-size: .12rem;
   
            color: #878787;
        }

        /* 目录 */
        .nav{
            width: 100%;
            height: 0.44rem;
            background: #fdfdfd;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .nav li{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1.78rem;
            height: 0.44rem;
        }
       
      
        .van-ellipsis{
            display: block;
            margin-left:  120px;
            margin-top:20px;
        }

        .ml{
            width: 100%;
            height: 0.44rem;
            background: #fdfdfd;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            letter-spacing: .5px;
        }
        .ml p{
            width:.89rem;
            text-align: center;
            height: 100%;
            line-height: 0.44rem;
        }
        .zhangjie{
            border-top: 1px solid #ccc;
            width: 100%;
            background: #fdfdfd;
            line-height: .66rem;
        }
        .zhangjie p{
            margin-left: .2rem;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            border-top: 1px solid #f6f6f6;
            margin: 0;
            padding: 0 .2rem;
        }
</style>