<template>
      <div class="fans">
        <div class="header">
                <h3>Ta的粉丝</h3>
        </div>
        <div class="hot-block">
          <router-link tag="a" to=""  v-for="(it,ix) in fansList">
            <div>
              <img :src="it.headPic" />
            </div>
            <div>
              <p>{{it.nickName}}</p>
            </div>
          </router-link>
        </div>
    </div>
</template>

<script>
import { fansApi } from "../../api/movie"
export default {
    name:"fans",
    created(){
        let userId = sessionStorage.getItem("userId");
        this.handlefans(userId);
    },
    methods:{
        async handlefans(city){
            let data = await fansApi(city);
            this.fansList = data.list;
        }
    },
    data(){
        return {
            fansList:[]
        }
    }
}
</script>

<style>

.fans .header {
    height: 0.41rem;
    display: flex;
    align-items: center;
}

.fans .header h3 {
    border-left: 3px solid #f39c11;
    height: 0.2rem;
    line-height: 0.2rem;
    padding-left: 0.06rem;
}

.fans .header span {
    flex: 1;
    text-align: right;
    padding-right: 0.06rem;
    font-size: 0.12rem;
    color:#f39c11;
}
.hot-block {
  height: auto;
}
.hot-block a {
  display: flex;
  padding: 0.11rem 0.09rem;
  padding-right: 0;
}
.hot-block a div:nth-child(1) {
  width: 0.39rem !important;
  height: 0.39rem !important;
  display: flex;
  align-items: center;
}
.hot-block a div:nth-child(2) {
  width: 100%;
  height: 0.39rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #f6f6f6;
  padding-left: 0.1rem;
  padding-bottom: 0.07rem;
}
.hot-block a div:nth-child(2) p:nth-child(2) {
  color: #a8a8a8;
  font-size: 0.1rem;
}

.hot-block a div img {
  width: 0.39rem;
  height: 0.39rem;
  border-radius: 50%;
}
</style>