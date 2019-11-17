<template>
    <div class="big_box">
        <h2 v-for="(item,index) in list">
            {{item.name}}
        </h2>
    </div>
</template>

<script>
import { clApi } from "../../api/movie";
export default {//bookId=43415
    created(){
        let city = "bookId="+this.$route.params.path;
        console.log(this.$route.params.path)
        if(this.$route.params.path){
            this.handleGetCl(city);
        }else{
            city = "bookId="+JSON.parse(localStorage.getItem("details_dl")).id;
            this.handleGetCl(city);
        }
        
    },
    methods:{
        async handleGetCl(city) {
                let data = await clApi(city);
                this.list = data.list;
        }
    },
    data(){
        return {
            list:[]
        }
    }
}
</script>

<style>
.big_box{
        height: auto !important;
 }
 .big_box h2{
     font-weight: normal;
     height: .36rem;
     line-height: .36rem;
     padding-left: .09rem;
    font-size: 20px;
    border-top: 1px solid #f6f6f6;
 }
</style>