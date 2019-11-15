<template>
   <main>
        <div class="desc">
            <div class="lr-outline">
                <img :src="obj.cover">
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
               <div class="author">{{obj.typeName}}｜{{obj.announcer}} 播</div>
               <div class="author">{{obj.author}} 播</div>
               <div class="author">
                   <span>
                        已连载{{obj.sections}}期
                   </span>
                   <span>
                        {{obj.playCount}}次播放
                   </span>
               </div>
            </div>
        </div>
    	
    	<div class="nav">
    		<ul>
    			<li>
    				详情
    			</li>
    			<li>
    				目录
    			</li>
    		</ul>
    	</div>
    	
    	<div>
    		<div class="book">
    			<div class="book-block">
    				<span>
              {{obj.description}}
    				</span>
    			</div>
    		</div>
    		<div class="user-list"></div>
    	</div>
    	
    	<div class="children">
            <div class="content">
            	<p>
            		<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573729688030&di=378bcff3217f3d4b0aedcefdec53dcb5&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F11%2F55%2F5903a4c51dd04_610.jpg">
            	</p>
            </div>
        </div>
    	
    	
    </main>
</template>

<script>
import { sea_datApi } from "../../api/movie";
export default {
   name:"program",
   data (){
     return {
       obj:{}
     }
   },
    beforeRouteEnter(to,form,next){
      next( (vm)=>{
        if(form.path == "/search"){
          let city = 'id='+vm.$route.query.id;
          console.log(city)
          vm.handleGetSeaList(city);
        }
      })
    },
    methods: {
         async handleGetSeaList(city) {
                let data = await sea_datApi(city);
                this.obj = data.ablumn;
        },
    }
}
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
  margin-bottom: 0.1rem;
}
main .nav ul {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  height: 0.4rem;
  align-items: center;
}
main .nav ul li {
  list-style: none;
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
</style>