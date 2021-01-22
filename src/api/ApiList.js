/**
 * @author Chenjunfan(chenjf@songcw.com)
 * @return {promise}
 */
import axios from '../libs/api.request';

const Api = {};

/**
 * @description 获取商品列表
 * @param {string} xxx xxx
 */
Api.goods = type => axios.request({
  url: `/index/goods?type=${type}`,
});

Api.buy = opts => axios.request({
  url: '/index/buy',
  data: opts,
});

export default Api;
