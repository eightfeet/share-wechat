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

export default async function (configs, shareData, url) {
  if (isWeChat()) {
    await loader(url);
    await config(configs);
    if (shareData) {
      const {data, success, cancel} = shareData;
      await share(data, success, cancel);
    }
  }
}