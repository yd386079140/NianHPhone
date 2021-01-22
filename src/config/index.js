export default {
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description api请求基础路径
   */
  baseUrl: process.env.VUE_APP_API_BASE,
  socketUrl: process.env.VUE_APP_SOCKET_BASE,
  pageSize: 20,
  /**
   * @description 权限验证
   */
  auth: {
    basicAuthUsername: process.env.VUE_APP_API_BASIC_AUTH_USERNAME,
    basicAuthPassword: process.env.VUE_APP_API_BASIC_AUTH_PASSWORD,
  },
};
