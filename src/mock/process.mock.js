const Mock = require('mockjs');

const Random = Mock.Random;

var ID = 0;
// 状态
var statusArr = [0, 1];

export const processData = function() {
    let process = [];
    for(let i = 0; i < 6; i++) {
        ID++
        let swiperCell = {
            id:ID,
            icon: Random.dataImage('40x40', 'mock的图片'),
            name: Random.cword(2,5),
            status: statusArr[Math.floor((Math.random()*statusArr.length))],
            sort: i+1,
        }
        process.push(swiperCell);
    }

    return process
}
