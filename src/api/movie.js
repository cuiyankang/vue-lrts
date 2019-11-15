import http from "../utils/request";

/***
 * 目录接口
 */
export const movienowApi = ()=>http({
    method:"get",
    url:"/ajax/getAlbumAudios?ablumnId=99118&sortType=0"
})

/***
 * 首页接口
 */
export const homenowApi = ()=>http({
    method:"get",
    url:"/ajax/getBookTypePage?typeId=6"
})
//https://m.lrts.me/ajax/getBookTypePage?typeId=6


/***
 * 详情 详情接口
 */
export const detailsApi = (city)=>http({
    method:"get",
    url:"/ajax/getBookInfo?"+city
})
//https://m.lrts.me/ajax/getBookInfo?id=51187457



/***
 * 详情 目录接口
 */
export const clApi = (city)=>http({
    method:"get",
    url:"/ajax/getBookMenu?"+city+"&pageNum=1&pageSize=100&sortType=0"
})
//https://m.lrts.me/ajax/getBookMenu?bookId=43415&pageNum=1&pageSize=50&sortType=0

/***
 * 搜索接口
 */
export const searchApi = (city)=>http({
    method:"get",
    url:"/ajax/search?"+city+"&pageSize=3"
})
//https://m.lrts.me/ajax/search?keyWord=%E6%89%BE%E5%A6%88%E5%A6%88&pageSize=3


/***
 * 搜索跳转详情页接口
 */
export const sea_datApi = (city)=>http({
    method:"get",
    url:"/ajax/getAlbumInfo?"+city
})
//https://m.lrts.me/ajax/getAlbumInfo?id=76146


/***
 * 搜索跳转详情页接口
 */
export const SortApi = ()=>http({
    method:"get",
    url:"/ajax/getCategory"
})
//https://m.lrts.me/ajax/getCategory


/***
 * 精品页 推荐接口
 */
export const boutiqueApi = ()=>http({
    method:"get",
    url:"/ajax/getBoutiquePage"
})
//https://m.lrts.me/ajax/getBoutiquePage


/***
 * 精品页 tab选项卡接口->精品推荐
 */
export const recommendApi = (city)=>http({//精品推荐
    method:"get",
    url:"/ajax/getBoutiqueResource?entityTypes=[0,2]&tId="+city.id+"&p=1&s=8&sort=1"
})


/***
 * 精品页 tab选项卡接口->分类精品
 */
export const classifyApi = (city)=>http({//分类精品
    method:"get",
    url:"/ajax/getBoutiqueResource?entityTypes=[0,2]&tId="+city.id+"&p=1&s=20&sort=2"
})




/*
分类（二级路由）
    ->精品推荐 https://m.lrts.me/ajax/getBoutiqueResource?entityTypes=[0,2]&tId=5245&p=1&s=8&sort=1
    ->分类精品 https://m.lrts.me/ajax/getBoutiqueResource?entityTypes=[0,2]&tId=5245&p=1&s=20&sort=2
*/