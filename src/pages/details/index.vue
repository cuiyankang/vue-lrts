<template>
  <main>
    <div class="desc">
      <div class="lr-outline">
        <img :src="obj.cover" />
      </div>
      <div class="lr-tag">
        <h4>{{obj.name}}</h4>
        <div class="xin">
          <i class="iconfont icon-icon"></i>
          <i class="iconfont icon-icon"></i>
          <i class="iconfont icon-icon"></i>
          <i class="iconfont icon-icon"></i>
          <i class="iconfont icon-icon"></i>
        </div>
        <div class="author">{{obj.type}}｜{{obj.author}} 著</div>
        <div class="author">{{obj.announcer}} 播</div>
        <div class="author">
          <span style="padding-right:20px">完结全 {{obj.sections}} 集</span>
          <span>{{(Math.round(parseInt(obj.play)/1000)/10)}}万次播放</span>
        </div>
      </div>
    </div>

    <div class="nav">
        <router-link :to="{name:'dl',params:{path:path}}" tag="a">详情</router-link>
        <router-link :to="{name:'cl',params:{path:path}}" tag="a">目录</router-link>
    </div>

    <router-view></router-view>
  </main>
</template>

<script>
import { detailsApi } from "../../api/movie";

export default {
  name: "Details",
  created() {
    document.title = this.$route.meta.title;
    let city = "id="+this.$route.params.path;
    this.path = this.$route.params.path;
    if(this.$route.params.path){
      this.handleGetdetailsList(city);
    }else{
        this.obj = JSON.parse(localStorage.getItem("details_dl"));
        this.list = JSON.parse(localStorage.getItem("details_dl")).extraInfos;
        this.path = JSON.parse(localStorage.getItem("details_dl")).id;
    }
  },
  methods: {
    async handleGetdetailsList(city) {
      console.log(222);
      let data = await detailsApi(city);
      this.obj = data;
      this.list = data.extraInfos;
    }
  },
  data() {
    return {
      obj: {},
      price: 100,
      list: [],
      path: "",
      flg:true
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 31.25vw;
}
body {
  font-size: 16px;
}
main {
  overflow: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  padding-bottom: 0.5rem;
  padding-top: 0.42rem;
}
.xin {
  padding-bottom: 0.03rem;
}
.xin i {
  color: #f39c11;
  font-size: 0.11rem;
}
main .desc {
  height: 1.1rem;
  padding: 0.12rem 0.12rem 0.12rem 0.08rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.08rem solid #f6f6f6;
}
.desc .lr-outline {
  width: 0.82rem;
  height: 1.17rem;
}
.desc .lr-outline img {
  width: 100%;
  height: 100%;
}
.desc .lr-tag {
  height: 1.17rem;
  width: 2.08rem;
}
.desc .lr-tag h4 {
  font-weight: normal;
}
.desc .lr-tag .author {
  color: #878787;
  font-size: 0.11rem;
  padding: 0.03rem 0;
}
main .nav {
  justify-content: center;
  display: flex;
  align-items: center;
  margin-bottom: 0.1rem;
  height: .36rem;
}
.nav a{
  line-height: .36rem;
  text-align: center;
  display: block;
  width: .60rem;
}
.book {
  border-bottom: 0.08rem solid #f6f6f6;
}
.book .book-block {
  font-size: 0.12rem;
  border-bottom: 1px solid #f6f6f6;
  padding: 0 0.06rem;
  padding-bottom: 0.15rem;
}
.book-d {
  display: flex;
}
.book-d p {
  color: #f39c11;
}
.book-d span {
  color: #c33;
}
.book-detail .book-d del {
  flex: 1;
  margin-left: 0.1rem;
}
.book-detail div {
  margin: 0.06rem;
}
main .children {
  background: #fff;
  box-sizing: border-box;
  border-bottom: 0.08rem solid #f6f6f6;
  line-height: 0.26667rem;
}

.children .header {
  height: 0.41rem;
  display: flex;
  align-items: center;
}

.children .header h3 {
  border-left: 3px solid #f39c11;
  height: 0.2rem;
  font-size: 0.16rem;
  line-height: 0.2rem;
  padding-left: 0.06rem;
}

.children .header span {
  flex: 1;
  text-align: right;
  padding-right: 0.06rem;
  font-size: 0.12rem;
  color: #f39c11;
}
.content {
  padding: 0 0.06rem;
}
.content p img {
  width: 100%;
}
.router-link-active {
  color: #f39c11;
  border-bottom: 1px solid #f39c11;
}
</style>