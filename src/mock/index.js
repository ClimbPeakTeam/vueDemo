const Mock = require('mockjs');

import { activeInfoData} from './activeInfo.mock'
import { helpCenterMockData } from './helpCenter.mock';
import { newsDetailData } from './newsDetail.mock';
import { myCustomer} from './myCustomer.mock'

Mock.mock('/active/activeInfo', 'post', activeInfoData);
Mock.mock('/helpCenter', 'post', helpCenterMockData);
Mock.mock('/newsDetail', 'post', newsDetailData);
Mock.mock('/myCustomer', 'post', myCustomer);
