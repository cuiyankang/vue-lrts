<template>
  <main>
    <div class="banner">
      <van-swipe :autoplay="3000">
          <van-swipe-item><img src="https://bookpic.lrts.me/g3iqvhwcmo9b79vxl8fnbik2sc74mcuo_720x333.jpeg"></van-swipe-item>
          <van-swipe-item><img src="https://bookpic.lrts.me/i3mhfbh3zkqobz53ow8bqno185prymlv_720x333.jpeg"></van-swipe-item>
          <van-swipe-item><img src="https://bookpic.lrts.me/rzmqoiv92pv8re9j7iyoyfs8u2ndx6wu_720x333.jpeg"></van-swipe-item>
          <van-swipe-item><img src="https://bookpic.lrts.me/2rig8r1cz340i4odieasqglbkn4971h4_720x333.jpeg"></van-swipe-item>
      </van-swipe>
    </div>

    <div class="box">
      <ul class="_ul">
        <router-link :to="item.path" tag="li" v-for="(item,index) in box_li" :key="index">
          <img :src="item.imgUrl"/>
          <ol class="_ol">{{item.text}}</ol>
        </router-link>
      </ul>
    </div>

    <div class="children">
      <div  v-for="(item,index) in list">
        <div class="header">
          <h3>{{item.name}}</h3>
          <span>更多</span>
        </div>

         <a class="data" v-for="(it,ix) in item.list" @click="handlehome(it.url)">
            <div class="left-box">
              <div>
                <img
                  :src="it.cover"
                />
              </div>
            </div>
            <div class="right-box">
              <div class="box1">
                <p>{{it.name}}</p>
              </div>
              <div class="box2">
                <p>{{it.desc}}</p>
              </div>
              <div class="box3">
                <span>
                  <img :src="box3_img" />
                </span>
                <b class="by">{{it.nickName}}</b>
                <i>{{(Math.round(parseInt(it.playCount)/1000)/10)}}万播放</i>
              </div>
            </div>
          </a>
      </div>
    </div>

    <!-- <div class="default">
      <span>©懒人听书 粤ICP备13061962号-6</span>
    </div> -->
  </main>
</template>

<script>
import { homenowApi } from "../../api/movie";
export default {
  name: "home_page",
  data() {
    return {
      box_li: [
        {
          text: "精品",
          imgUrl: "./img/精品.png",
          path:"/boutique"
        },
        {
          text: "分类",
          imgUrl: "./img/分类.png",
          path:"/sort"
        },
        {
          text: "会员",
          imgUrl: "./img/会员.png",
          path:"/member"
        },
        {
          text: "主播",
          imgUrl: "./img/主播.png",
          path:"/anchor"
        }
      ],
      box3_img: "./img/语言.png",
      list: [],
      url:"",
    };
  },
  created() {
    this.handleGetHomeList();
  },
  methods: {
    async handleGetHomeList() {
        let data = await homenowApi();
        this.list = data.data.subTypeRecommendList;
    },
    handlehome(url){
       this.$router.push({name:"dl",params:{path:url,nm:"书籍详情"}})//'/details/?'+url+'&name=书籍详情'
    }
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

li {
  list-style: none;
}

img {
  vertical-align: top;
}

a {
  text-decoration: none;
}
main {
  height: auto;
  overflow: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  padding-bottom: 0.5rem;
  padding-top: 0.42rem;
}
._ol{
  color: #000 !important ;
}
._ul li{
  border:none!important;
  display: flex;
  align-items: center;
}
main .banner {
  height: 1.5rem;
  width: 100%;
}

.van-swipe{
  height: 1.5rem;
  overflow: hidden;
}
.van-swipe__track{
  height: 1.5rem;
}
.van-swipe__track div{
  float: left;
}


.banner img {
  width: 100%;
  height: 100%;
}
main .box {
  height: 0.8rem;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 0.1rem;
  box-sizing: border-box;
  border-bottom: 0.08rem solid #f6f6f6;
}

.box ul {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.box ul li {
  text-align: center;
}
main .children {
  height: auto;
  background: #fff;
  box-sizing: border-box;
  line-height: 0.26667rem;
}
.children>div{
    border-bottom: .06rem solid #f6f6f6;
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
}

.children .data {
  display: flex;
  height: 1.26rem;
  width: 100%;
}

.data .left-box {
  display: inline-block;
  margin: 0.12rem 0.1rem;
}

.data .left-box div {
  width: 0.72rem;
  height: 1.02rem;
}

.data .left-box div img {
  width: 100%;
  height: 100%;
}

.data .right-box {
  margin: 0.12rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.box1 p {
  font-size: 0.14rem;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.box2 {
  margin: 0.1rem 0;
}

.box2 p {
  font-size: 0.12rem;
  line-height: 0.16rem;
  height: 35px;
  width: 250px;
  overflow: hidden;
}

.box3 {
  display: flex;
  align-items: center;
}

.box3 span {
  display: inline-block;
  width: 0.14rem;
  height: 0.14rem;
  background: #ababab;
  border-radius: 50%;
}

.box3 span img {
  width: 100%;
  height: 100%;
}

.box3 .by {
  flex: 1;
  font-weight: normal;
  font-size: 0.12rem;
}

.box3 i {
  font-size: 0.12rem;
}

main .default {
  height: 0.58rem;
  background: #fff;
  font-size: 0.1rem;
  color: #ababab;
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>