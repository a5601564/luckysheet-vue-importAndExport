/*
 * @Author: your name
 * @Date: 2020-03-20 14:17:34
 * @LastEditTime: 2020-03-26 11:27:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: 。。。。。。。。。。
 */
import axios from 'axios'
 
// create an axios instance
const service = axios.create({
  baseURL: '/',
  timeout: 80000 // request timeout
})
 
// request interceptor
service.interceptors.request.use(
 
  config => {
    // Do something before request is sent
    return config
  },
  error => {
    // Do something with request error
    // console.log("出错啦",error) // for debug
    Promise.reject(error)
  }
)
 
// response interceptor
service.interceptors.response.use(
  response => response,
 
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)
 
export default service