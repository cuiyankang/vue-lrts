<template>
  <main class="tm">
    <van-tabs style="position: fixed;z-index:100;">
      <van-tab   
      style="position: fixed" 
      v-for="(im,index) in navList" 
      :title="im.name" 
      :to="'/boutique?tabIndex='+im.url">
        
      </van-tab>
    </van-tabs>

    <div class="big_box" v-if="flg">
        <div class="banner">
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(i,x) in bannerList" :key="x" >
                <img :src="i" />
                </van-swipe-item>
            </van-swipe>
        </div>

        <div class="box">
            <ul>
                <li>热销书籍</li>
                <li>限免</li>
                <li>限时折扣</li>
            </ul>
        </div>


            <div class="children">
            <div v-for="(item,index) in subTypeRecommendList" :key="index">
                <div class="header">
                <h3>{{item.name}}</h3>
                <span>更多</span>
                </div>

                <a class="data" v-for="(it,ix) in item.list" :key="ix">
                <div class="left-box">
                    <div>
                    <img :src="it.cover" />
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
    </div>
    <div class="big_box2"  v-if="!flg">
        <div class="recommend" v-if="flgs">
            <div class="recommend_header">
                    <h3>精品推荐</h3>
                    <span>更多</span>
            </div>
            <ul>
                <li v-for="(item,index) in recommendList" :key="index">
                    <div>
                        <img :src="item.cover">
                    </div>
                    <p>{{item.name}}</p>
                </li>
            </ul>
        </div>

        <div class="children">
                    <div class="header">
                        <h3>分类精品</h3>
                        <span>更多</span>
                    </div>
            <div v-for="(item,index) in classifyList" :key="index">
                    <a class="data">    <!--跳转详情 https://m.lrts.me/ajax/getBookInfo?id=91633103  -->
                        <div class="left-box">
                            <div>
                                <img :src="item.cover" alt="">
                            </div>
                        </div>
                        <div class="right-box">
                            <div class="box1">
                                <p>{{item.name}}</p>
                            </div>
                            <div class="box2">
                                <p>{{item.desc}}</p>
                            </div>
                            <div class="box3">
                                <span>
                                    <img :src="urlimg" alt="">
                                </span>
                                <b class="by">{{item.announcer}}</b>
                                <i>{{(Math.round(parseInt(item.hot)/1000)/10)}}万播放</i>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
  </main>
</template>

<script>
import { boutiqueApi } from "../../api/movie";
import { recommendApi } from "../../api/movie";//精品推荐
import { classifyApi } from "../../api/movie";//分类精品
import { async } from 'q';

export default {
  name: "Boutique",
  created() {
    this.handleboutique();
  },
  methods: {
    async handleboutique() {
      let data = await boutiqueApi();
      this.subTypeRecommendList = data.data.subTypeRecommendList;
      data.data.bannerList.forEach(element => {
        let str = element.icon;
        let suffix = "_720x333." + str.split(".")[str.split(".").length - 1];
        let url = str.replace(/\.(jpeg|gif|jpg|png)/g, suffix);
        this.bannerList.push(url);
      });
      data.data.subTypeRecommendList.forEach(element => {
        this.navList.push(element);
      });
    },
    async handlerecommend(_id){
        let data = await recommendApi({id:_id});
        if(data.list){
            this.flgs = true;
             this.recommendList = data.list.splice(0,4);
        }else{
            this.flgs = false;
        }
       
    },
    async handleclassify(_id){
        let data = await classifyApi({id:_id});
        this.classifyList = data.list;
    },
    handleID(item){
        console.log(item)
    }
  },
  data() {
    return {
      subTypeRecommendList: [],
      box3_img: "./img/语言.png",
      bannerList: [] ,//字符串拼接_720x333
      navList:[{name:"推荐",path:"/boutique",url:"0"}],
      flg:true,
      recommendList:[],
      classifyList:[],
      urlimg:"./img/语言.png",
      flgs:true
    };
  },
  beforeRouteUpdate(to,from,next){
      if(Number(from.query.tabIndex) == 0 || Number(to.query.tabIndex)){
          this.flg=false;
          this.handlerecommend(to.query.tabIndex);
          this.handleclassify(to.query.tabIndex);
      }else{
        this.flg=true;
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

main .banner {
  height: 1.5rem;
  width: 100%;
}

.nav {
  height: 0.34rem;
}

.van-swipe {
  height: 1.5rem;
  overflow: hidden;
}
.van-swipe__track {
  height: 1.5rem;
}
.van-swipe__track div {
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
  padding: 0 0.24rem;
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
  font-size: 0.12rem !important;
  border: 1px solid #a8a8a8 !important;
  border-radius: .04rem !important;
  padding: .06rem !important;
  line-height: 0 !important;
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

.van-tab{
    width: .16rem;
}
.van-tabs__wrap{
    width: 3.2rem;
}
.van-tab--active{
    color: #f39c11;
    border-bottom: 4px solid #f39c11;
}
.tm{
    padding-top: .42rem;
}
.big_box{
  padding-top: 45px;
}
.big_box2{
  padding-top: 45px;
}

.recommend{
    height: 1.94rem;
    border-bottom: .10667rem solid #f6f6f6;
}
.recommend .recommend_header {
    height: 0.5rem;
    display: flex;
    align-items: center;
}

.recommend .recommend_header h3 {
    border-left: 3px solid #f39c11;
    height: 0.2rem;
    line-height: 0.2rem;
    padding-left: 0.06rem;
}

.recommend .recommend_header span {
    flex: 1;
    text-align: right;
    padding-right: 0.06rem;
    font-size: 0.12rem;
}
.recommend li{
    height:1.25rem;
    width: .64rem;
}
.recommend li div{
    height:.91rem;
    width: .64rem;
}
.recommend li div img{
    height:100%;
    width: 100%;
}
.recommend li p{
    height:0.32rem;
    width: .64rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: .11rem;
    margin-top: .05rem;
}
.recommend ul{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>