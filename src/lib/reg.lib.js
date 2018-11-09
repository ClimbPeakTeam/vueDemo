// 正则校验姓名，只能输入汉字，最长6个字符
export const chineseNameReg = /^[\u4E00-\u9FA5]{1,6}$/;

// 正则校验身份证号
export const IDcardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 