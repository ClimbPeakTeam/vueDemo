const Mock = require('mockjs');

const Random = Mock.Random;

var rankListMockDataID = 0;

export const helpCenterMockData = function() {
    let rankList = [];
    for(let i = 0; i < 5; i++) {
        rankListMockDataID++
        let rankListCell = {
            id:rankListMockDataID,
            title: Random.cword(3,15),
            content: Random.cword(15,50)
        }
        rankList.push(rankListCell);
    }

    return rankList
}



