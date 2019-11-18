<template>
    <main>
        <div class="sort">
            <div class="sort-item">
                <router-link :to="{name:'boutique',params:{id:item.url,name:item.name}}" tag="div" v-for="(item,index) in bookTypeList" :key="index">{{item.name}}</router-link>
            </div>
        </div>
    </main>
</template>

<script>
import { SortApi } from "../../api/movie"
import { boutiqueApi } from "../../api/movie";

export default {
    name:"Sort",
    created(){
        document.title=this.$route.meta.title;
        // this.handleSort();
        this.handleboutique();
    },
    methods:{
        // async handleSort(){
        //     let data = await SortApi();
        //     console.log(data.data.bookTypeList)
        //     this.bookTypeList = data.data.bookTypeList;
        // },
        async handleboutique() {
            let data = await boutiqueApi();
            console.log(data.data.subTypeRecommendList);
            this.bookTypeList = data.data.subTypeRecommendList;
        },
    },
    data(){
        return {
            bookTypeList:[],
        }
    },
    
}
</script>

<style>
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
        main .sort {
            background: #fff;
            box-sizing: border-box;
            line-height: .26667rem;
        }
        .sort .header {
            height: 0.41rem;
            display: flex;
            align-items: center;
        }
        .sort .header h3 {
            border-left: 3px solid #f39c11;
            height: 0.2rem;
            font-size: 0.12rem;
            line-height: 0.2rem;
            padding-left: 0.06rem;
        }

        .sort .header span {
            flex: 1;
            text-align: right;
            padding-right: 0.06rem;
            font-size: 0.12rem;
            color:#f39c11;
        }
        .sort .sort-item{
            padding: 0.116rem;
        }
        .sort .sort-item div{
            width: 0.96rem;
            text-align: center;
            color: #666;
            background: #f6f6f6;
            margin-top: .04rem;
            display: inline-block;
            margin-right: .04rem;
            height: 0.4rem;
            line-height: 0.4rem;
        }
       .sort .sort-item div:nth-child(3n){
           margin-right: 0;
        }

</style>