
天天爱车汇目录接口  https://m.lrts.me/ajax/getAlbumAudios?ablumnId=99118&sortType=0   

详情页(二级路由)
    ->详情 接口  https://m.lrts.me/ajax/getBookInfo?id=51187457
    ->目录 接口 https://m.lrts.me/ajax/getBookMenu?bookId=43415&pageNum=1&pageSize=50&sortType=0

搜索接口 https://m.lrts.me/ajax/search?keyWord=%E6%89%BE%E5%A6%88%E5%A6%88&pageSize=3
/*
    encodeURI("找妈妈") == "%E6%89%BE%E5%A6%88%E5%A6%88" //true
    decodeURI("%E6%89%BE%E5%A6%88%E5%A6%88") == "找妈妈"
*/             

搜索跳详情接口 https://m.lrts.me/ajax/getAlbumInfo?id=76146

分类 https://m.lrts.me/ajax/getCategory

精品（内容区） https://m.lrts.me/ajax/getBoutiquePage
精品（nav导航栏） https://m.lrts.me/ajax/getBookType?fid=6000&open=2

分类（二级路由）
    ->精品推荐 https://m.lrts.me/ajax/getBoutiqueResource?entityTypes=[0,2]&tId=5245&p=1&s=8&sort=1
    ->分类精品 https://m.lrts.me/ajax/getBoutiqueResource?entityTypes=[0,2]&tId=5245&p=1&s=20&sort=2


注册 
nodejs的方式http://localhost:3000/users/register

$.ajax({
    type:"POST",
    url:"/users/register",
    data:{
        username,
        password
    },
    success:this.handleFormSubmitSucc.bind(this)
})
handleFormSubmitSucc(data){
       if(data.data.status == 1){
           alert(data.data.info);
           new Page().createForm(true)
       }else{
            alert(data.data.info);
       }
    }

nodejs的方式：
 // axios({
            //     method:"post",
            //     url:"http://localhost:3000/data",//json-server的地址
            //     data:{
            //         username:this.username,
            //         password:this.pwd,
            //         code:200,
            //         errMsg:"",
            //         data:{
            //             status:1
            //         }
            //     }
            // })

 // this.$router.push('/login');






登陆
nodejs的方式 http://localhost:3000/users/login

 $.ajax({
            type:"post",
            url:"/users/login",
            data:{
                username,
                password
            }
            ,success:this.handleFormSubmitSucc.bind(this)
        })
    handleFormSubmitSucc(data){
        
        if(data.data.status == 1){
            let usname = $("#login_username").val();
            Cookies.set('username', usname);
            alert(data.data.info);
            window.location.href="http://localhost:3000/html/list.html";
        }else{
            alert(data.data.info);
        }
    }

mock数据的方式：
     // handlelogin(){
            // axios({
            //     method:"get",
            //     url:"http://localhost:3000/data?username="+this.username,//
            // }).then((res)=>{
            //     if(res.data.length>0){
            //         if(res.data[0].password == this.pwd){
            //             if(confirm("登陆成功")){
            //                 localStorage.setItem("token",this.username);
            //                 let route_name = this.$route.query.path.replace('/','');
            //                  this.$router.push({name:route_name,query:{username:this.username}});
            //             }
            //         }else{
            //             alert("用户名或密码错误")
            //         }
            //     }else{
            //         alert("该账户为空")
            //     }
            // })
        // }

推荐主播 https://m.lrts.me/ajax/getRecommendUsers?needAlbum=1&needFollow=1&opType=H&referId=0&size=18&type=1&typeId=0

新晋主播 https://m.lrts.me/ajax/getRecommendUsers?needAlbum=0&needFollow=0&opType=H&referId=0&size=8&type=2&typeId=0

热门主播 https://m.lrts.me/ajax/getRecommendUsers?needAlbum=1&needFollow=1&opType=H&referId=0&size=18&type=1&typeId=0

阈值加载 https://m.lrts.me/ajax/getRecommendUsers?needAlbum=1&needFollow=1&opType=H&referId=639543292&size=10&type=1&typeId=0


个人主页
    头部 https://m.lrts.me/ajax/userIndexHeadPage?userId=207655074
    二级路由
        ->主页 https://m.lrts.me/ajax/userIndexPage?userId=207655074
        ->关注 https://m.lrts.me/ajax/getUserFollowing?userId=207655074&size=20&referId=0&fans=0&opType=T
        ->粉丝 https://m.lrts.me/ajax/getUserFollowing?userId=207655074&size=20&referId=0&fans=1&opType=T