const Mock = require('mockjs');

const Random = Mock.Random;

export const introduceData = function() {
    let introduce = [];

    let swiperCell = {
        productId: Random.integer(0,1000),
        applyCondition: Random.cparagraph(1),
        applyExplain: Random.cparagraph(1),
        introduce: Random.cparagraph(1,10),
        createTime: Random.datetime('yyyy-MM-dd'),
        updateTime: Random.datetime('yyyy-MM-dd')
    }
    introduce.push(swiperCell);

    return introduce
}
