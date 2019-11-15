<template>
  <div>
    <div class="search-field">
      <div class="search-field-input__wrap">
        <i class="iconfont icon-sousuo s_i" style="color:#B0B0B0;"></i>
        <input type="search" placeholder="书名/节目/主播" class="search-field-input" v-model="val" />
        <i class="van-icon van-icon-clear" style="color:#B0B0B0;display:none;"></i>
      </div>

      <v-touch  
          tag="span" 
          :class="text == '搜索'?'yellow':''" 
          v-on:tap="handleVt()"          
      >{{text}}</v-touch>
    </div>
    <ul>
      <a class="data" v-for="(item,index) in list" @click="handleSearch('id='+item.id)">
        <div class="left-box">
          <div style="height:.64rem;width:.64rem;">
            <img :src="item.cover" alt />
          </div>
        </div>
        <div class="right-box">
          <div class="box1">
            <p>{{item.name}}</p>
          </div>
          <div class="box2">
            <p>{{item.description}}</p>
          </div>
          <div class="box3">
            <span>
              <img :src="imgUrl" alt />
            </span>
            <b class="by">{{item.nickName}}</b>
            <i>{{item.playCount}}播放</i>
          </div>
        </div>
      </a>
    </ul>
  </div>
</template>

<script>
import { searchApi } from "../../api/movie";
import { throttle } from "../../utils/jieliu"
export default {
  name: "Search",
  created() {
    document.title = this.$route.meta.title;
  },
  data() {
    return {
      val: "",
      list: [],
      imgUrl: "./img/语言.png",
      text:"取消"
    };
  },
  watch: {
    val(newval) {
        this.text = "搜索";
        throttle(
            async ()=>{
                    let city = "keyWord=" + encodeURI(newval);
                    let data = await searchApi(city);
                    console.log(data);
                    this.list = data.data.albumResult ? data.data.albumResult["list"] : [];
        })
        /////////////////
        if(newval.length == 0){
            this.list = [];
            this.text = "取消";
        }
    }
  },
  methods:{
    handleSearch(url){
      this.$router.push('/program/?'+url+'&name=节目详情')
    },
    handleVt(){
      if(this.text == '取消'){
        this.$router.back()
      }
    }
  }
};
</script>

<style>
.search-field {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  padding: 0.16rem 0.14rem;
  border-bottom: 0.01333rem solid #ededed;
  background: #fff;
}
.search-field-input__wrap {
  position: relative;
  width: 2.4rem;
  height: 0.3rem;

  background: #eee;
  border-radius: 0.66667rem;
  box-sizing: border-box;
}
.search-field,
.search-field-input__wrap {
  /* display: -webkit-box; */
  /* display: -webkit-flex; */
  display: flex;
  -webkit-box-align: center;
  /* -webkit-align-items: center;  */
  align-items: center;
}
.search-field-input {
  padding: 0;
  height: 0.3rem;
  width: 3.01333rem;
  color: #333332;
  border: none;
  background: none;
  box-sizing: border-box;
  outline: none;
  margin: 0 0.15rem 0 0.1rem;
}
.search-field__btn {
  font-size: 0.16rem;
  text-align: center;
}
.s_i {
  font-size: 0.2rem;
  padding: 0.05rem;
}

.data {
  display: flex;
  height: 1rem;
  width: 100%;
  border-bottom: 1px solid #f6f6f6;
}

.data .left-box {
    display: flex;
    margin: 0.12rem 0.1rem;
    align-items: center;
    justify-content: center;
}
.data .left-box div {
  width: 0.72rem;
  height: 100%;
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
.box2{
    margin:0;
}
.box1 p {
  font-size: 0.14rem;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.box2 p {
  color: #878787;
  font-size: 0.12rem;
  line-height: 0.3rem;
  height: 0.31rem;
  width: 2.19rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  color: #a8a8a8;
  flex: 1;
  font-weight: normal;
  font-size: 0.12rem;
}

.box3 i {
  color: #a8a8a8;
  text-align: center;
  padding: 0 0.03rem;
  font-size: 0.1rem;
  border: 1px solid #a8a8a8;
  border-radius: 0.04rem;
}

.yellow{
    color: #f39c11;
}
</style>