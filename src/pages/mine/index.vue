<template>
    <section>

        <div class="login-info" data-v-323d08df="">
            <div class="avatar" data-v-323d08df="">
                <img src="http://assets.lrts.me/fed-lrts-wap/img/icon_default_head.eefcc6e.svg" class="avatar-icon"
                    data-v-323d08df="">

            </div>
            <div class="user-info" data-v-323d08df="">
                <div class="name" data-v-323d08df=""><span data-v-323d08df="">马上登录</span></div>
                <div class="message" data-v-323d08df=""><span data-v-323d08df="">登陆后享受更多服务</span></div>
            </div>
        </div>

        <ol class="top_ol">
            <li>
                <i class="iconfont icon-wode f_i"></i>
                <span >个人主页</span>
            
            </li>
            <li>
                <i class="iconfont icon-wode f_i"></i>
                <span>关注</span>
                
            </li>
            <li>
                <i class="iconfont icon-wode f_i"></i>
                <span>粉丝</span>
            
            </li>
        </ol>
        
            <div class="vip">
        
                <div class="vip1">
                    <span>vip会员</span>
                            <p>开通&nbsp;&nbsp;<span>＞</span></p>
                     </div>
                </div>

                <div class="vip1">
                        <span>我的钱包</span>
                                <p>充值&nbsp;&nbsp;<span>＞</span></p>
                         </div>
                </div>


                <div class="vip1">
                        <span>我的上传</span>
                                <p><span>＞</span></p>
                         </div>
                </div>

                <div class="vip1">
                        <span>我的关注</span>
                                <p><span>＞</span></p>
                         </div>
                </div>

                <div class="vip1">
                        <!-- <i class="iconfont icon-wode f_i"> -->
                        <span>设置</span>
                                <p><span>＞</span></p>
                         </div>
                </div>
                
            </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style>
    /* 内容 */
        .login-info[data-v-323d08df],
        .tabs[data-v-323d08df] {
            display: flex;
            background-color: #fff;
        }

        .login-info[data-v-323d08df] {
           padding: .2rem .2rem 0 .2rem;
        }

        .user-info[data-v-323d08df] {

            display: flex;

            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            padding: .16rem .13rem;
        }
       

        /* 图标 */
        section .top_ol{
            display: flex;
            height: 0.8rem;
            align-items: center;
            border-bottom: 1px solid #f6f6f6;
        }
        section .top_ol li{
           display: flex;
           flex-direction: column;
           align-items: center;
           justify-content: center;
           width: 1.07rem;
        }
        section ol li span{
            font-size: 0.108rem;
        }
        section .f_i{
            font-size: .24rem;
        }




        /* vip */
        .vip1{
            width: 100%;
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            padding: .13rem .2rem;
            box-sizing: border-box;
            line-height: .3rem;
            position: relative;
            background-color: #fff;
            color: #333332;
            font-size: .16rem;
            overflow: hidden; 
            border-bottom: 1px solid #f6f6f6;
        }
        .vip1{
            display: flex;
            flex-direction:row;
            justify-content: space-between;
            align-items: center;
        }
</style>