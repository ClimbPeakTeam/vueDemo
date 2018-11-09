const Mock = require('mockjs');

const Random = Mock.Random;

const vipLevelArr = ['黄金会员', '银牌会员', '铜牌会员', '纯铁会员']; 

export const myCustomer = function() {
    let myCustomer = [];
	for(let i = 0; i < 5; i++) {
	    let myCustomerCell = {
	        productId: Random.integer(0,1000),
	        ordernum: Random.cword(3, 5),
	        vipLevel: vipLevelArr[Math.floor((Math.random()*vipLevelArr.length))],
	        investmentAmount:  Random.integer(0,100000),
	        YNumber:  Random.integer(0,100000),
	        investmentNumber:  Random.integer(0,10),
	        expirationDate: Random.datetime('yyyy-MM-dd'),
	        createTime: Random.datetime('yyyy-MM-dd'),  
	    }	   
	    myCustomer.push(myCustomerCell);
	}
    return myCustomer
}
