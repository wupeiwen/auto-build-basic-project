/*
 * @Author: wupeiwen javapeiwen2010@gmail.com
 * @Date: 2018-09-18 10:19:23
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2019-09-24 19:53:46
 */

//  引入httpUtil
import { get, post } from '@/utils/httpUtil'
// 基本路径
const baseUrl = process.env.LOCATION

// 接口示例1
export const api1 = (params) => get(`${baseUrl}/1`, params)
// 接口示例2
export const api2 = (params) => post(`${baseUrl}/2`, params)
