<template>

    <header>
            <v-touch :class="text == 'sousuo'?'iconfont icon-sousuo h_i':'iconfont icon-jiantou3 j_i'"
            tag="i"
            v-on:tap="callback"
            ></v-touch>
        <div class="title">{{this.$route.meta.title}}</div>
        <v-touch tag="i" v-on:tap="handleMulu" class="iconfont icon-mulu mulu"></v-touch>
    </header>
</template>

<script>
export default {
    name:"Header",
    data(){
        return {
            title:"",
            text:"",
            tos:""
        }
    },
   methods:{
      callback(){
          this.$router.back()
      },
      handleMulu(){
         this.$router.push('/catalog')
      }
   },
 

   
};
</script>

<style>
        *{
            margin: 0;;
            padding: 0;
        }
        html{
            font-size: 31.25vw;
        }
        body{
            font-size: 16px;
        }

        /* 头部 */
        header{
            height: .42rem;
            width: 100%;
            background: #fff;
            display: flex;
            z-index: 1;
            align-items: center;
            position:fixed;
            top: 0;
            border-bottom: 1px solid #ededed;
        }
        header .h_i{
            font-size: .3rem;
            padding-left: .03rem;
        }
        header .j_i{
            font-size: .2rem;
            padding-left: .03rem;
        }
        header .title{
            width: 2.6rem;
            display: flex;
            justify-content: center;
            font-size: .22rem;
        }
        header .mulu{
            font-size:.29rem;
        }
</style>