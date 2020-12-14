/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-09-18 10:19:23
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2019-12-03 10:07:45
 */

//  引入httpUtil
import { get, post } from '@/api/httpUtil'
// 基本路径
const baseUrl = process.env.VUE_APP_LOCATION

// 接口示例1
export const api1 = (params) => get(`${baseUrl}/1`, params)
// 接口示例2
export const api2 = (params) => post(`${baseUrl}/2`, params)
