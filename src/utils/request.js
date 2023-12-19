import axios from 'axios'

const baseURL = 'https://api.hpan.wmhwiki.cn/'

const request = axios.create({
    // 基础地址，超时时间
    baseURL,
    timeout: 3000
})

// 请求拦截器
request.interceptors.request.use(
    (config) => {
        return config
    },
    (err) => Promise.reject(err)
)

// 响应拦截器
request.interceptors.response.use(
    (res) => {
        // 摘取核心响应数据
        if (res.data.code !== 500) {
            return res
        } else {
            // 处理业务失败
            ElMessage.error(res.data.msg || '服务异常')
            return Promise.reject(res.data)
        }
    }
)

export default request
export { baseURL }
