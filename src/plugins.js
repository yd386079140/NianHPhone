import { Toast } from 'vue-ydui/dist/lib.rem/dialog';


const components = {
};

const Plugins = {};

Plugins.install = (Vue) => {
  // 组件全局安装
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key]);
  });

  Vue.prototype.$showErr = (err) => {
    Toast({ mes: err, timeout: 1500, icon: 'error' });
  };

  Vue.prototype.$setLocalStorage = (name, data) => {
    if (Object.prototype.toString.call(data) === '[object String]') {
      localStorage.setItem(name, data);
    } else {
      localStorage.setItem(name, JSON.stringify(data));
    }
  };

  Vue.prototype.$getLocalStorage = name => JSON.parse(localStorage.getItem(name));
};


export default Plugins;
