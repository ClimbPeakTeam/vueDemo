const Mock = require('mockjs');

const Random = Mock.Random;

var rankListMockDataID = 0;

// 利率单位 日月年
var rateUnitArr = ['日', '月', '年'];
// 产品类型
var productTypeArr = ['借款产品', '信用卡产品'];

export const getLoanListMockData = function() {
    let rankList = [];
    for(let i = 0; i < 10; i++) {
        rankListMockDataID++ 
        let rankListCell = {
            id:rankListMockDataID,
            imgUrl: Random.dataImage('300x250', 'mock的图片'),
            businessName: Random.cword(3,15),
            name: Random.cword(3,15),
            nameLable: Random.cword(3,15),
            status: Random.integer(0,1),
            productTag: Random.cword(3, 4),
            describe: Random.cword(5,30),
            productType: productTypeArr[Math.floor((Math.random()*productTypeArr.length))],
            rateUnit: rateUnitArr[Math.floor((Math.random()*rateUnitArr.length))],
            rate: Random.float(0,0,2,2),
            minAmount: Random.integer(0,1000),
            maxAmount: Random.integer(2000,10000),
            // range: `${Random.integer(0,1000)}-${Random.integer(2000,10000)}元`,
            // rangeName: Random.ctitle(3,3),
            // info: Random.cword(5,30),
        }
        rankList.push(rankListCell);
    }

    return rankList
}



