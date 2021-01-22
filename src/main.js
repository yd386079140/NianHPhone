import Vue from 'vue';
import App from '@/App';
import router from '@/router';
import store from '@/store';
import plugins from '@/plugins';
import YDUI from 'vue-ydui';
import '@/assets/css/ydui.px.css';
import VueCookies from 'vue-cookies';
import VConsole from 'vconsole';
import VueVideoPlayer from 'vue-video-player';
import VueSocketIO from 'vue-socket.io';
import config from './config';
import './assets/fonts/iconfont.css';
import 'vant/lib/index.css';

Vue.use(new VueSocketIO({
  debug: true,
  connection: config.socketUrl,
  vuex: {
    store,
    actionPrefix: '',
    mutationPrefix: '',
  },
  options: { path: '', transports: ['websocket'] },
}));

const dev = (process.env.NODE_ENV === 'development');
if (dev) {
  const log = new VConsole();
  log.setOption({ maxLogNumber: 5000 });
}


Vue.use(VueCookies);
Vue.use(YDUI);
Vue.use(plugins);
Vue.use(VueVideoPlayer);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
