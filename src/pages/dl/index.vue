<template>
<div>
     <div class="big_box">
    <div>
      <div class="book">
        <div class="book-block">
          <span>{{obj.desc}}</span>
        </div>
      </div>
      <div class="user-list"></div>

      <section></section>
    </div>

    <div class="children" v-for="(item,index) in list" :key="index">
      <div class="header">
        <h3>{{item.title}}</h3>
      </div>
      <div class="content" v-html="item.content"></div>
    </div>
  </div>
</div>
 
</template>

<script>
import { detailsApi } from "../../api/movie";
export default {
    created(){
      console.log(this.$route.params.path)
      if(localStorage.getItem("details_dl")){//如果存在
        if(!(JSON.parse(localStorage.getItem("details_dl")).id == this.$route.params.path)){//如果id不一致
            let city ="id="+this.$route.params.path;
            if(this.$route.params.path){
              localStorage.removeItem("details_dl");
              this.handleGetDl(city);
            }else{
              this.obj = JSON.parse(localStorage.getItem("details_dl"));
              this.list = JSON.parse(localStorage.getItem("details_dl")).extraInfos;
            }
        }else{//如果id一致
          this.obj = JSON.parse(localStorage.getItem("details_dl"));
          this.list = JSON.parse(localStorage.getItem("details_dl")).extraInfos;
        }
      }else{
        if(this.$route.params.path){
            let city ="id="+this.$route.params.path;
            this.handleGetDl(city);
        }
      }
    },
    methods:{
        async handleGetDl(city) {
                let data = await detailsApi(city);
                console.log(data)
                localStorage.setItem("details_dl",JSON.stringify(data))
                this.obj = data;
                this.list = data.extraInfos;
        }
    },
    data(){
        return {
            obj:{},
            list:[]
        }
    }
};
</script>

<style>
.big_box {
  height: 100%;
}
</style>