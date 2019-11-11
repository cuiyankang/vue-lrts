<template>
    <header>
        <i class="iconfont icon-sousuo h_i"></i>
        <div class="title">懒人听书</div>
    </header>
</template>

<script>
export default {};
</script>

<style>
        *{
            margin: 0;;
            padding: 0;
        }
        html{
            font-size: 31.25vw;
        }
        body{
            font-size: 16px;
        }

        /* 头部 */
        header{
            height: .42rem;
            width: 100%;
            background: #fff;
            display: flex;
            z-index: 1;
            align-items: center;
            position:fixed;
            top: 0;
            border-bottom: 1px solid #ededed;
        }
        header .h_i{
            font-size: .3rem;
            padding-left: .03rem;
        }
        header .title{
            width: 2.6rem;
            display: flex;
            justify-content: center;
            font-size: .22rem;
        }
</style>