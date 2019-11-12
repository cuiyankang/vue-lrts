<template>
  <div class="app">

  </div>
</template>

<script>
import axios from "axios";
import {movienowApi} from "@/api/movie";
export default {    
    name:"App",
    async created(){
        let pin = await movienowApi();
        console.log(pin);
        // server({
        //     method:"get",
        //     url:"/ajax/getBookInfo",
        //     data:{
               

        //     }
        // }).then((data)=>{
        //     console.log(data);
        // }).catch((err)=>{
        //     console.log(err);
        // })
    }
}
</script>

<style>

</style>