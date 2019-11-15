<template>
    <main>
        <div class="children" v-for="(item,index) in bookTypeList" :key="index">
            <div class="header">
                <h3>{{item.name}}</h3>
            </div>
            <div class="children-item">
                <div v-for="(it,ix) in item.subList" :key="ix">{{it.name}}</div>
            </div>
        </div>
    </main>
</template>

<script>
import { SortApi } from "../../api/movie"
export default {
    name:"Sort",
    created(){
        document.title=this.$route.meta.title;
        this.handleSort();
    },
    methods:{
        async handleSort(){
            let data = await SortApi();
            console.log(data.data.bookTypeList)
            this.bookTypeList = data.data.bookTypeList;
        }
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
        main .children {
            background: #fff;
            box-sizing: border-box;
            border-bottom: .08rem solid #f6f6f6;
            line-height: .26667rem;
        }
        .children .header {
            height: 0.41rem;
            display: flex;
            align-items: center;
        }

        .children .header h3 {
            border-left: 3px solid #f39c11;
            height: 0.2rem;
            font-size: 0.12rem;
            line-height: 0.2rem;
            padding-left: 0.06rem;
        }

        .children .header span {
            flex: 1;
            text-align: right;
            padding-right: 0.06rem;
            font-size: 0.12rem;
            color:#f39c11;
        }
        .children .children-item{
            padding: 0.116rem;
        }
        .children .children-item div{
            width: 0.96rem;
            height: 0.28rem;
            text-align: center;
            color: #666;
            background: #f6f6f6;
            margin-top: .04rem;
            display: inline-block;
            margin-right: .04rem;

        }
       .children .children-item div:nth-child(3n){
           margin-right: 0;
        }

</style>