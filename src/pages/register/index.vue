<template>
    <section>
        <div class="NAV">
            <div class="nav1">
                <label for="">手机号</label>
                <input type="text" placeholder="11位手机号码"><br>
            </div>
            <div class="nav2">
                <label for="">昵称</label>
                <input type="text" placeholder="4-20个字符" ><br>
            </div>
            <div class="nav3">
                <label for="">密码</label>       
                <input type="password" placeholder="6-20个数字或字母">
            </div>
            <div class="mn">
                    <button>下一步</button>
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
      
         .NAV{
            width: 100%;
            display: flex;
            padding: .14rem .25rem;
            box-sizing: border-box;
            line-height: .29rem;
            position: relative;
            background-color: #fff;
            display: block;
            font-size: .20rem;
            overflow: hidden;
            padding-top: .4rem;
            
            
        }
       

        .nav1 {
            border-bottom: 1px solid #ededed;
            
            padding-bottom: .1rem;
        }
        .nav1  label{
            font-size: .15rem;
            padding-left: 0.05rem;
        }
        .nav1 input{
            border:none;
            margin-left: .25rem ;
            font-size: .15rem;
            outline: none;
            
        }

        .nav2 {
            border-bottom: 1px solid #ededed;
            padding-top: .25rem;
            padding-bottom: .1rem;
        }
        .nav2 label{
            font-size: .15rem;
            padding-left: 0.05rem;
        }
        .nav2 input{
            border:none;
            margin-left: .42rem ;
            font-size: .15rem;
            outline: none;
            
        }

        .nav3 {
            border-bottom: 1px solid #ededed;
            padding-top: .25rem;
            padding-bottom: .1rem;
        }
        .nav3 label{
            font-size: .15rem;
            padding-left: 0.05rem;
        }
        .nav3 input{
            border:none;
            margin-left: .42rem ;
            font-size: .15rem;
            outline: none;
            
        }
        /* 下一步 */
        .mn{
            padding-top: .4rem;
            display: flex;
            justify-content: center;
        }
        .mn  button {
            width: 2.8rem;
            font-size: .24rem;
            height: .5rem;
            line-height: .5rem;
            border-radius: 1.5rem;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            /* margin-left: .24rem; */
            outline: none;
            background: #f39c11;
        }
</style>