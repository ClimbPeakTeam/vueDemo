const Mock = require('mockjs');

const Random = Mock.Random;

export const calculatorMockData = function() {
    let rankListCell = {
        principal: Random.integer(0,1000),
        interest: Random.integer(0,1000),
        repaymentAmount: Random.integer(0,1000)
    }

    return rankListCell
}



