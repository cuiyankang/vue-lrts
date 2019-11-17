<template>
    <div>
        <div class="personal-top">
            <div class="personal-top-background">
                <div class="img" 
                    :style="background_image">
                </div>
            </div>
            <div class="Img">
                <img :src="userobj.cover">
            </div>
            <p class="nickname">{{userobj.nickname}}</p>
            <p class="describe">{{userobj.description}}</p>
        </div>

        <div class="personal-center">
            <div class="personal-tab">
                <router-link tag="li" to="/user/principal"> <span>主页</span> </router-link >
                <router-link tag="li" to="/user/follow"> <span>关注</span> </router-link >
                <router-link tag="li" to="/user/fans"> <span>粉丝</span> </router-link >
            </div>
            <router-view class="personal-center-bottom"></router-view>
        </div>
    </div>
</template>

<script>
import { userApi } from "../../api/movie"
export default {
    name:"user",
    created(){
        let userId = this.$route.query.userId;
        if(userId){
            this.handleuser(userId);
            sessionStorage.setItem("userId",userId)
        }else{
            userId = sessionStorage.getItem("userId");
            this.handleuser(userId);
        }
    },
    methods:{
        async handleuser(city){
            let data = await userApi(city);
            this.userobj = data.data.userInfo;
            this.background_image = "background-image:url("+data.data.userInfo.cover+");";
        }
    },
    data(){
        return {
            userobj:{},
            background_image:""
        }
    }
}
</script>

<style>
    .personal-top{
        height: 1.64rem;
        text-align: center;
        padding: .18rem 0 .12rem 0;
        box-sizing:border-box;
    }
    .personal-top-background{
        height: 1.64rem;
        overflow: hidden;
        position: absolute;
        top:.43rem;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
    .img{
        display: block;
        height: 120%;
        width: 120%;
        transform: translate3d(-10%,-10%,0);
        background: 50% no-repeat;
        background-size: 100%;
        filter: blur(0.1rem);
    }
    .Img img{
        height: .59rem;
        width: .59rem;
        border-radius: 50%;
        border:2px solid #fff;
    }
    .nickname{
        color: #fff;
        margin: .09rem 0 .05rem 0;
    }
    .describe{
        color: #fff;
        font-size: .11rem;
    }
    .personal-tab{
        height: .34rem;
        border-bottom: .06rem solid #f6f6f6;
        display: flex;
        justify-content: center;
    }
    .personal-tab li{
        list-style: none;
        width: .8rem;
        text-align: center;
        height: .34rem;
        line-height: .34rem;
    }
    .personal-center-bottom{
        height: auto;
        padding-bottom: .5rem;
    }
    .personal-tab .router-link-active span{
            color: #f39c11;
            font-weight: 700;
            display: inline-block;
            border-bottom: 4px solid #f39c11;
    }
</style>