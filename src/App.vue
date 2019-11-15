<template>
  <div id="app">
    <Header/>
    <router-view class="main"></router-view>
    <TabBar v-if="this.$route.meta.flg"/>
  </div>
</template>

<script>
import Header from "./common/header"
import TabBar from "./common/tabBar"
import { movienowApi } from "./api/movie"
export default {
  name:"App",
  components:{
    Header,
    TabBar
  },
  data(){
    return {
    }
  },

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
