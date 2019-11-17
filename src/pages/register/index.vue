<template>
    <section>
        <div class="NAV">
            <div class="nav2">
                <label for="">账号</label>
                <input type="text" placeholder="4-20个字符" v-model="username"><br>
            </div>
            <div class="nav3">
                <label for="">密码</label>       
                <input type="password" placeholder="6-20个数字或字母" v-model="pwd">
            </div>
            <div class="mn">
                    <v-touch tag="button" v-on:tap="handleVt()">下一步</v-touch>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios"
import { registerApi } from "../../api/movie"

export default {
    name:"register",
    methods:{
        async handleVt(){
            let city = {
                username:this.username,
                password:this.pwd
            }
            let data = await registerApi(city);
            console.log(data);
            if(data.data.status == 1){
                if(confirm(data.data.info)){
                    this.$router.push('/login');
                }
            }else{
                alert(data.data.info);
            }
        }
    },
    data(){
        return {
            username:"",
            pwd:""
        }
    }
}
</script>

<style>
 /* 内容 */
      
         .NAV{
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
       

        .nav1 {
            border-bottom: 1px solid #ededed;
            
            padding-bottom: .1rem;
        }
        .nav1  label{
            font-size: .15rem;
            padding-left: 0.05rem;
        }
        .nav1 input{
            border:none;
            margin-left: .25rem ;
            font-size: .15rem;
            outline: none;
            
        }

        .nav2 {
            border-bottom: 1px solid #ededed;
            padding-top: .25rem;
            padding-bottom: .1rem;
        }
        .nav2 label{
            font-size: .15rem;
            padding-left: 0.05rem;
        }
        .nav2 input{
            border:none;
            margin-left: .42rem ;
            font-size: .15rem;
            outline: none;
            
        }

        .nav3 {
            border-bottom: 1px solid #ededed;
            padding-top: .25rem;
            padding-bottom: .1rem;
        }
        .nav3 label{
            font-size: .15rem;
            padding-left: 0.05rem;
        }
        .nav3 input{
            border:none;
            margin-left: .42rem ;
            font-size: .15rem;
            outline: none;
            
        }
        /* 下一步 */
        .mn{
            padding-top: .4rem;
            display: flex;
            justify-content: center;
        }
        .mn  button {
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
</style>