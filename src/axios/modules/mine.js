
/*
*   活动相关的结构封装：
*       包括： 三种活动的活动介绍、商家信息、活动信息
*/
import service from '../request'
import qs from 'qs'
 
// 我的-帮助中心 /helpCenter  /v1/cgi/getHelpByRedis /Support/findAll
export function mineHelpApi(data) {
    return service({
        url: '/Support/findAll',
        method: 'post',
        data: qs.stringify(data)
    })
}
//我的客户   /appCoupon/queryCouponExchangeDetail
export function myCustomerApi(data) {
    return service({
        url: '/myCustomer',
        method: 'post',
        data: qs.stringify(data)
    })
}
// 我的卡包详情    http://10.0.130.33:10020/appCoupon/queryCouponExchangeDetail?couponFlowId=6
export function couponDetailApi(data) {
    return service({
        url: '/appCoupon/queryCouponExchangeDetail',
        method: 'post',
        data: qs.stringify(data)
    })
}
