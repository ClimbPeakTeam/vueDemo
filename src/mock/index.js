const Mock = require('mockjs');

import { newsListData } from './newsList.mock'

Mock.mock('/newslist', 'post', newsListData);
