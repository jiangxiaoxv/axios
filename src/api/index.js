import axios from 'axios'

const requestIntance = axios.create({
  baseURL: '',
  timeout: 3000,
  headers: {
    name: 'jxx',
  },
  params: {
    // 是一个简单对象 与请求一起发送的url参数
    name: 'jxx',
  },
  // 作为请求体
  data: {
    firstName: '姜',
  },
  withCredentials: false, // 表示跨域请求是否需要使用凭证
  responseType: 'json', // 表示浏览器将要响应的数据类型
  transformRequest: [
    (data, headers) => {
      if (headers && headers['Content-type'] === 'application/json') {
        return JSON.stringify(data)
      }
      return data
    },
  ],
  /* // 可以自定义跑出错误的http code
  validateStatus: function (status) {
    return status < 500;
  }, */
})

const requestInterceptors = requestIntance.interceptors.request.use(
  function (config) {
    // 再发送请求之前做些什么

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 取消拦截器
// requestIntance.interceptors.request.eject(requestInterceptors);

requestIntance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default axios
