<template>
    <div>
        <div class="search-field">
            <div class="search-field-input__wrap">
            <i class="iconfont icon-sousuo s_i" style="color:#B0B0B0;"></i>
            <input type="search" placeholder="书名/节目/主播" value="" class="search-field-input">
            <i class="van-icon van-icon-clear" style="color:#B0B0B0;display:none;"></i>
        </div>
            <span class="search-field__btn">取消</span>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
            .search-field{
                /* display: -webkit-box;
                display: -webkit-flex;
                display: flex;
                -webkit-box-align: center;
                -webkit-align-items: center;
                align-items: center; */
                -webkit-box-pack: justify;
                -webkit-justify-content: space-between;
               
                padding: .16rem .14rem;
                border-bottom: .01333rem solid #ededed;
                background: #fff;
            }
            .search-field-input__wrap {
                position: relative;
                width: 2.4rem;
                height: .3rem;
                
                background: #eee;
                border-radius: .66667rem;
                box-sizing: border-box;
            }
            .search-field, .search-field-input__wrap {
                /* display: -webkit-box; */
                /* display: -webkit-flex; */
                display: flex; 
                -webkit-box-align: center; 
                /* -webkit-align-items: center;  */
                align-items: center;
                }
            .search-field-input {
                padding: 0; 
                height: .3rem;
                width: 3.01333rem; 
                color: #333332;
                border: none;
                background: none;
                box-sizing: border-box;
                outline: none;
                margin: 0 0.15rem 0 0.1rem;
            }
            .search-field__btn {
                font-size: .16rem;
                text-align: center;
            }
            .s_i{
                font-size: .2rem;
                padding: .05rem;
            }
</style>