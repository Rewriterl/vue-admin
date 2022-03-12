import axios from 'axios'
import { ElMessage } from 'element-plus'

const SERVER_ERROR = '服务器跑路了'
const GRAND_ERROR = '权限不足'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

request.interceptors.response.use(
  (resp) => {
    const { status, obj, msg } = resp.data
    if (resp.status && resp.status === 200 && status === 500) {
      ElMessage.error({
        message: msg,
        duration: 1500
      })
      return Promise.reject(msg)
    }
    if (msg) {
      ElMessage.success({
        message: msg,
        duration: 1500
      })
    }
    return obj
  },
  (error) => {
    const status = error.response.status
    if (status === 504 || status === 404) {
      ElMessage.error({
        message: SERVER_ERROR,
        duration: 1500
      })
      return Promise.reject(SERVER_ERROR)
    } else if (status === 403) {
      ElMessage.error({
        message: GRAND_ERROR,
        duration: 1500
      })
      return Promise.reject(GRAND_ERROR)
    } else {
      const e = error.response.data.msg ? error.response.data.msg : '未知错误'
      ElMessage.error({
        message: e,
        duration: 1500
      })
      return Promise.reject(e)
    }
  }
)

export default request
