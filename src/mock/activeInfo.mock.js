const Mock = require('mockjs');

const Random = Mock.Random;

export const activeInfoData = function() {

    let data = {
        id: Random.integer(),
        info: Random.cparagraph( 5,20 ),
    }

    return data
}
