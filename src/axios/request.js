import axios from 'axios'
import $store from '@/store/index'
import { Toast } from 'mint-ui';
// baseUrl引入：
import {
    baseUrl
  } from '@/config/env'

// create an axios instance
let baseConfig = {
  baseURL: baseUrl, // api的base_url
  withCredentials: true,
  timeout: 10000, // request timeout
  headers: {
    'Content-Type':'application/x-www-form-urlencoded',
    'Accept': 'application/json',
  },
}

const service = axios.create(baseConfig)

// request interceptor
service.interceptors.request.use(config => {
  if($store.getters.token) {
    baseConfig.headers.Authorization = $store.getters.token;
  }
  // Do something before request is sent
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(response => {
     return response;
},error => {
    console.log('err' + error) // for debug
    Toast(error);
    return Promise.reject(error)
})

export default service
