import axios from 'axios';
import qs from 'qs';
import { Toast } from 'vue-ydui/dist/lib.rem/dialog';

const loginFilterList = [
  '/api/app/outsource/operator/forgetPwd',
  '/api/app/outsource/operator/sendValidateCode',
];
class HttpRequest {
  constructor(configs) {
    this.baseUrl = configs.baseUrl;
    this.queue = {};
  }

  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      defaults: {
        withCredentials: true,
      },
      // transformRequest: [data => qs.stringify(data)],
      headers: {
        post: {
          'Content-Type': 'application/json;',
        },
        Authorization: `Bearer ${localStorage.getItem('Authorization')}`,
      },
    };
    return config;
  }

  distroy(url) {
    delete this.queue[url];
  }

  interceptors(instance, url) {
    // 请求拦截
    instance.interceptors.request.use((config) => {
      if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
        config.transformRequest = [data => qs.stringify(data)];
      }
      // 接口-登录过滤
      loginFilterList.includes(config.url) && delete (config.headers.Authorization);

      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        //
      }
      this.queue[url] = true;
      return config;
    }, error => Promise.reject(error));
    // 响应拦截
    instance.interceptors.response.use((res) => {
      this.distroy(url);
      res.data.success = (res.data.code === '200');
      if (!res.data.success && res.data.message) {
        Toast({ mes: res.data.message, timeout: 3000, icon: 'error' });
      }
      return res.data;
    }, (error) => {
      // const pathName = window.location.pathname;
      // 未登录 无权限
      // if ([401, 403].includes(error.response.status) && pathName !== '/login.html') {
      //   window.location.href = `/login.html?redirect=${pathName}`;
      // } else
      if (error.response.data.message) {
        Toast({ mes: error.response.data.message, timeout: 3000, icon: 'error' });
      } else {
        Toast({ mes: '网络不佳~请稍后重试~', timeout: 3000, icon: 'error' });
      }
      this.distroy(url);
      return error.response.data;
      // return Promise.reject(error);
    });
  }

  request(options) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), { method: 'POST' }, options);
    this.interceptors(instance, options.url);
    return instance(options);
  }
}
export default HttpRequest;
