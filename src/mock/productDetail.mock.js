const Mock = require('mockjs');

const Random = Mock.Random;

var rankListMockDataID = 0;

// 利率单位 日月年
var rateUnitArr = ['日', '月', '年'];
// 产品类型
var productTypeArr = ['借款产品', '信用卡产品'];
// 还款方式
var repaymentMethodArr = ['1','2','3','4','5','6'];

export const detailMockData = function() {
    let rankListCell = {
        id:rankListMockDataID,
        imgUrl: Random.dataImage('300x250', 'mock的图片'),
        businessName: Random.cword(3,15),
        name: Random.cword(3,15),
        nameLable: Random.cword(3,15),
        status: Random.integer(0,1),
        productTag: Random.cword(3, 4),
        describeLable: Random.cword(5,30),
        productType: productTypeArr[Math.floor((Math.random()*productTypeArr.length))],
        rateUnit: rateUnitArr[Math.floor((Math.random()*rateUnitArr.length))],
        rate: Random.float(0,0,2,2),
        drawTimeLable:  Random.integer(0,12),
        repaymentMethod: repaymentMethodArr[Math.floor((Math.random()*repaymentMethodArr.length))],
        minAmount: Random.integer(0,1000),
        maxAmount: Random.integer(2000,10000),
        jumpUrl: Random.url('http'),
    }

    return rankListCell
}



