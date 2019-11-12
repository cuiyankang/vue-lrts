<template>
  <div id="app">
    <Header/>
    <router-view class="main"></router-view>
    <TabBar/>
  </div>
</template>

<script>
import Header from "./common/header"
import TabBar from "./common/tabBar"
import { movienowApi } from "./api/movie"
export default {
  name:"app",
  components:{
    Header,
    TabBar
  },
   created(){
       this.handleGetMovieList()
    },
    methods:{
      async handleGetMovieList(cityId){
        let data = await movienowApi(cityId);
        console.log(data)
      }
    }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .main{
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    padding-top: .42rem;
    padding-bottom: .50rem;
  }
</style>
