const Mock = require('mockjs');

const Random = Mock.Random;

var rankListMockDataID = 0;

export const applyListMockData = function() {
    let data = [];
    for(let i = 0; i < 0; i++) {
        rankListMockDataID++
        let rankListCell = {
            productId:rankListMockDataID,
            imgUrl: Random.dataImage('300x250', 'mock的图片'),
            nameLable: Random.cword(3,15),
            creditId: Random.integer(10),
            term: `${Random.integer(1,24)}个月`,
            rateUnit: '月',
            rate: Random.float(0,0,2,2),
            principal: Random.integer(500,40000),
            createTime: Random.datetime('yyyy-MM-dd HH:mm:ss')
        }
        data.push(rankListCell);
    }

    return {data, totalPages: 5, totalRows: 50 }
}



