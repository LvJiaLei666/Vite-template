import axios from 'axios'
import router from '@/router'

const cancelRequest: any = axios.CancelToken

const token = localStorage.getItem('token')

const request = axios.create({
  baseURL: '',
  timeout: 5000,
  withCredentials: true,
  headers: {
    version: '1.0.1', // 接口的版本号
    Authorization: 'Bearer ' + token, // 向后台发送的token
    get: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    post: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  },
  validateStatus() {
    return true
  }
})

let pending: any[] = [] // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
/**https://blog.csdn.net/qq_25771201/article/details/109459429*/
/**
 * 取消重复请求
 * */
const removePending = ()=>{

}

export default request
