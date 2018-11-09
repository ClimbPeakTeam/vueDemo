const Mock = require('mockjs');

const Random = Mock.Random;


export const newsDetailData = function() {
    let rankListCell = {
        id:Random.integer(),
        createTime: Random.date('yyyy-MM-dd'),
        content: `<div style="width: 100%;"><p>${Random.cparagraph( 5,20 )}</p><img style="width:6rem; height: 4rem;display:block;margin:0 auto;" src="${Random.dataImage('300x250', 'mock的图片')}" /> <p>${Random.cparagraph( 5,20 )}</p><p>${Random.cparagraph( 5,20 )}</p><p>${Random.cparagraph( 5,20 )}</p></div>`,
        title: Random.cword(5,15)
    }

    return rankListCell
}



