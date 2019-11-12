<template>
         <main>
        <div class="banner">
            <img src="https://bookpic.lrts.me/jrw3h5p7z7wfuhrh0feuviqvr0ggbxly_720x333.jpeg">
        </div>

        <div class="box">
            <ul>
                <li v-for="(item,index) in box_li" :key="index">
                    <img :src="item.imgUrl">
                    <p>{{item.text}}</p>
                </li>
            </ul>
        </div>

       <div class="children">
            <div class="header">
                <h3>儿童</h3>
                <span>更多</span>
            </div>

            <a class="data">
                <div class="left-box">
                    <div>
                        <img src="https://bookpic.lrts.me/nibgfjr59buwsoljw6mayydru5q367yb_180x254.jpeg" alt="">
                    </div>
                </div>
                <div class="right-box">
                    <div class="box1">
                        <p>抓住3-6岁儿童心理：陪孩子走过敏感期</p>
                    </div>
                    <div class="box2">
                        <p>通俗易懂儿童心理学专业知识，针对家长头痛的问题，小妙招带你手把手解决育儿难题。</p>
                    </div>
                    <div class="box3">
                        <span>
                            <img :src="box3_img">
                        </span>
                        <b class="by">播音郭锐</b>
                        <i>26.1万播放</i>
                    </div>
                </div>
            </a>
        </div>

        <div class="default">
            <span>
                ©懒人听书 粤ICP备13061962号-6
            </span>
        </div>
    </main>
</template>

<script>
export default {
    name:"home_page",
    data(){
        return {
            box_li:[
                {
                    text:"精品",
                    imgUrl:"./img/精品.png"
                },
                {
                    text:"分类",
                    imgUrl:"./img/分类.png"
                },
                {
                    text:"排行榜",
                    imgUrl:"./img/排行榜.png"
                },
                {
                    text:"会员",
                    imgUrl:"./img/会员.png"
                },
                {
                    text:"主播",
                    imgUrl:"./img/主播.png"
                },
            ],
            box3_img:"./img/语言.png"

        }
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
            padding-bottom: .50rem;
            padding-top: .42rem;
        }

        main .banner {
            height: 1.5rem;
            width: 100%;
        }

        .banner img {
            width: 100%;
            height: 100%;
        }
        main .box {
            height: .8rem;
            background: #fff;
            display: flex;
            align-items: center;
            padding: 0 .24rem;
            box-sizing: border-box;
            border-bottom: .08rem solid #f6f6f6;
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
            height: 4.24rem;
            background: #fff;
            box-sizing: border-box;
            border-bottom: .08rem solid #f6f6f6;
            line-height: .26667rem;
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