<template>
    <div>
         <div class="principal" v-for="(item,index) in principalList" :key="index">
            <div class="header">
                <h3>上传的节目</h3>
            </div>
            <div class="principal-item">
                <div class="principal-item-img">
                    <img :src="item.cover" alt="">
                </div>
                <p>
                    {{item.name}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { principalApi } from "../../api/movie"
export default {
    name:"principal",
    created(){
        let userId = sessionStorage.getItem("userId");
        this.handleprincipal(userId);
    },
    methods:{
        async handleprincipal(city){
            let data = await principalApi(city);
            this.principalList = data.data.ablumnList.list;
        }
    },
    data(){
        return {
            principalList:[]
        }
    }
}
</script>

<style>
        .principal {
            background: #fff;
            box-sizing: border-box;
            border-bottom: .08rem solid #f6f6f6;
            line-height: .26667rem;
        }
        .principal .header {
            height: 0.41rem;
            display: flex;
            align-items: center;
        }

        .principal .header h3 {
            border-left: 3px solid #f39c11;
            height: 0.2rem;
            line-height: 0.2rem;
            padding-left: 0.06rem;
        }

        .principal .header span {
            flex: 1;
            text-align: right;
            padding-right: 0.06rem;
            font-size: 0.12rem;
            color:#f39c11;
        }
        .principal .principal-item{
            display: flex;
        }
        .principal-item-img{
            padding: .11rem .09rem;
        }
        .principal .principal-item div img{
            width: .55rem;
            height: .55rem;
            border:1px solid #999;
        }
        .principal-item p{
            line-height: .3rem;
        }
</style>