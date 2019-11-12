import http from "@utils/request";

/***
 * 跳转详情页接口
 */
export const movienowApi = (cityId)=>http({
    method:"get",
    url:"/ajax/getBookMenu?bookId=42904&pageNum=1&pageSize=50&sortType=0",
    // data:{
    //     id:"13626091"
    // }
})

/**
 * 
 * 跳转搜索接口
 */

export const moviecommingApi = (cityId=10)=>http({
    methods:"get",
    url:"/ajax/getHomePage",
    data:{
        cityId:cityId
    }
})  