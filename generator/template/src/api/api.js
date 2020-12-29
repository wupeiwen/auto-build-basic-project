//  引入httpUtil
import { get, post } from '@/api/httpUtil'
// 基本路径
const baseUrl = process.env.VUE_APP_LOCATION

// 接口示例1
export const api1 = (params) => get({url: `${baseUrl}/1`, params: params})
// 接口示例2
export const api2 = (params) => post({url:`${baseUrl}/2`, params: params, responseType: 'json'})
// 接口示例3
export const api3 = (params) => post({url:`${baseUrl}/3`, params: params, responseType: 'json', headers: {'Content-Type': 'multipart/form-data'}})