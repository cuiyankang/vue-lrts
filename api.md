
天天爱车汇  https://m.lrts.me/ajax/getAlbumAudios?ablumnId=99118&sortType=0   

详情(二级路由)
    ->详情接口  https://m.lrts.me/ajax/getBookInfo?id=51187457
    ->目录接口 https://m.lrts.me/ajax/getBookMenu?bookId=43415&pageNum=1&pageSize=50&sortType=0

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
