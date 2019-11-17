<template>
  <div ref="main">
    <div class="children" ref="box">
      <div>
        <div class="header">
          <h3>推荐主播</h3>
        </div>
        <div class="children-item">
          <router-link tag="a" :to="'/user/principal/?userId='+item.userId" v-for="(item,index) in anchorList">
            <img :src="item.cover" />
            <p>{{item.nickName}}</p>
          </router-link>
        </div>
      </div>

      <div>
        <div class="header">
          <h3>新晋主播</h3>
        </div>
        <div class="children-item">
          <router-link tag="a" :to="'/user/principal/?userId='+its.userId"  v-for="(its,ixs) in newlist">
            <img :src="its.cover" />
            <p>{{its.nickName}}</p>
          </router-link>
        </div>
      </div>

      <div>
        <div class="header">
          <h3>热门主播</h3>
        </div>
        <div class="hot-block">
          <router-link tag="a" :to="'/user/principal/?userId='+it.userId"  v-for="(it,ix) in hot_blockList">
            <div>
              <img :src="it.cover" />
            </div>
            <div>
              <p>{{it.nickName}}</p>
              <p>最近更新：{{it.albumName}}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { anchorApi } from "../../api/movie";
import { hotApi } from "../../api/movie";
import { IslodingApi } from "../../api/movie";
export default {
  name: "anchor",
  data() {
    return {
      anchorList: [],
      hot_blockList: [],
      newlist: [],
      isloding:false,
      referId:"188023996"
    };
  },
  created() {
    this.handleanchor();
    this.handlehot();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    async handleanchor() {
      let data = await anchorApi();
      this.anchorList = data.list.slice(0, 8);
      this.hot_blockList = data.list;
    },
    async handlehot() {
      let datas = await hotApi();
      this.newlist = datas.list;
    },
    async handleIsloding() {
      let city = "referId="+this.referId;
      let data = await IslodingApi(city);
      this.referId = data.list[data.list.length-1].referId;
      data.list.forEach(element => {
        this.hot_blockList.push(element);
      });
      this.isloding = false;
    },
    handleScroll(){
        let scrollTop = this.$refs.main.scrollTop;
        let cH = document.documentElement.clientHeight;
        if(this.isloding == false && scrollTop + cH >= this.$refs.box.clientHeight-900){
          this.isloding = true;
          this.handleIsloding();
        }
    }
  }
};
</script>

<style>
.main {
  overflow: auto !important;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  padding-bottom: 0.5rem;
  padding-top: 0.42rem;
}
main .children {
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
  color: #f39c11;
}

.children-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border-bottom: 0.08rem solid #f6f6f6;
}
.children-item a {
  width: 0.55rem;
  height: 0.76rem;
  padding: 10px;
  text-align: center;
}
.children-item a img {
  width: 0.55rem;
  border-radius: 50%;
}
.children-item a p {
  font-size: 0.11rem;
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