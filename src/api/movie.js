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



export const detailsApi = (city)=>http({
    method:"get",
    url:"/ajax/getBookInfo?"+city
})
