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
 * 详情接口
 */
export const detailsApi = (city)=>http({
    method:"get",
    url:"/ajax/getBookInfo?"+city
})
//https://m.lrts.me/ajax/getBookInfo?id=51187457

/***
 * 搜索接口
 */
export const searchApi = (city)=>http({
    method:"get",
    url:"/ajax/search?"+city+"&pageSize=3"
})
//https://m.lrts.me/ajax/search?keyWord=%E6%89%BE%E5%A6%88%E5%A6%88&pageSize=3