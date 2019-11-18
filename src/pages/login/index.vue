<template>
    <section>
        <div class="Nav">
            <div class="nav1">
                <label for="">账号</label>
                <input type="text" placeholder="邮箱/手机号" v-model="username">
            </div>

            <div class="nav2">
                    <label for="">密码</label>
                    <input type="password" placeholder="请输入密码" v-model="pwd">
            </div>
        </div>
        <div class="mima">
            <a href="#">忘记密码?</a>
        </div>
        <div class="mbn">
            <v-touch tag="button" v-on:tap="handlelogin()">登录</v-touch>
        </div>
        <div class="login">
            <a href="/#/register" >快速注册</a>
        </div>
    </section>
</template>

<script>
import axios from "axios"
import { loginApi } from "../../api/movie"

export default {
    name:"login",
    created(){
        console.log(Boolean( this.$route.query.path == undefined))
    },
    data(){
        return {
            username:"",
            pwd:""
        }
    },
    methods:{
        async handlelogin(){
             let city = {
                username:this.username,
                password:this.pwd
            }
            let data = await loginApi(city);
            if(data.data.status == 1){
                if(confirm(data.data.info)){
                    localStorage.setItem("token",this.username);
                    console.log(this.$route.query.path)
                    // let route_name = this.$route.query.path.replace('/','');
                    this.$router.push({name:'mine',query:{username:this.username,status:data.data.status}});
                    console.log(data);
                };
            }else{
                alert(data.data.info);
            }
        }
    }
}
</script>

<style>
 .Nav{
            width: 100%;
            display: flex;
            padding: .14rem .25rem;
            box-sizing: border-box;
            line-height: .29rem;
            position: relative;
            background-color: #fff;
            display: block;
            font-size: .20rem;
            overflow: hidden;
            padding-top: .4rem;
            
            
        }
        /* 账号 */
        .nav1 {
            border-bottom: 1px solid #ededed;
            
            padding-bottom: .1rem;
        }
        .nav1  label{
            padding-left: 0.14rem;
        }
        .nav1 input{
            border:none;
            margin-left: .25rem ;
            font-size: .15rem;
            outline: none;
            
        }
        /* 密码 */
        .nav2 label{
            color: #333332;
            

        }
        .nav2 {
            border-bottom: 1px solid #ededed;
            
            padding-bottom: .1rem;
        }
        .nav2  label{
            padding-left: 0.14rem;
        }
        .nav2 input{
            border:none;
            margin-left: .25rem ;
            font-size: .15rem;
            outline: none;
            
        }
        
        .mima a{
            padding-right: .25rem;
            float: right;
            font-size: .16rem;
            color: #666;
            display: inline-block;
           
        }
       .mbn{
        padding-top: .4rem;
        display: flex;
        justify-content: center;
        width:100%;
       }
       .mbn  button {
            width: 2.8rem;
            font-size: .24rem;
            height: .5rem;
            line-height: .5rem;
            border-radius: 1.5rem;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            /* margin-left: .24rem; */
            outline: none;
            background: #f39c11;
        }
        /* 注册 */
        .login a{
            font-size: .16rem;
            line-height: .27rem;
            color: #f39c11;
            justify-content: center;
            align-items: center;
            display: flex;
            padding-top:.2rem;
        }
        .login-third__title{
            text-align: center;
            font-size: .17333rem;
            line-height: .24rem;
            color: #ababab;
            position: relative;
            
            margin-top:.5rem;
        }
        .ico{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin:.3rem .2rem;
        }
</style>