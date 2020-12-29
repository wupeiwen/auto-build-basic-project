//  引入httpUtil
import { get, post } from '@/api/httpUtil'
// 基本路径
const baseUrl = process.env.VUE_APP_LOCATION

// 接口示例1
export const api1 = (params) => get(`${baseUrl}/1`, params)
// 接口示例2
export const api2 = (params) => post(`${baseUrl}/2`, params)
