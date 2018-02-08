import 'babel-polyfill';
import loader from './loader.js';
import config from './config.js';
import share from './share.js';

export const wechatShare = share;

export function isWeChat() {
  const ua = window.navigator.userAgent.toLowerCase();
  const compare = ua.match(/MicroMessenger/i) || '';
  if ((compare.toString()) === 'micromessenger') {
    return true;
  }
  console.warn('非微信环境！');
  return false;
}

export default function (configs, shareData, url) {
  Promise.resolve()
    .then(() => {
      if (isWeChat()) {
        return loader(url);
      } else {
        throw '非微信环境！';
      }
    })
    .then(() => config(configs))
    .then(res => {
      if (shareData) {
        const {data, success, cancel} = shareData;
        return share(data, success, cancel);
      } else {
        return res;
      }
    })
}