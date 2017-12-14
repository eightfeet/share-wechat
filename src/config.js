function arrConcat(arr1, arr2) {
  const arr = arr1.concat();
  for (let i = 0; i < arr2.length; i += 1) {
    arr.indexOf(arr2[i]) === -1 ? arr.push(arr2[i]) : 0;
  }
  return arr;
}

let wx = {}

function config(config) {
  return new Promise((resolve, reject) => {
    if (!window.wx) {
      console.error("请引入微信JSSDK");
      return;
    }
    wx = window.wx;
    if (window.wxConfig) {
      resolve();
      return;
    }
    if (!config || typeof config !== "object") {
      reject("缺少微信config参数");
      return;
    }
    const getConfig = {};
    getConfig.debug = config.debug || false;
    getConfig.appId = config.appId || "";
    getConfig.timestamp = config.timestamp || "";
    getConfig.nonceStr = config.nonceStr || "";
    getConfig.signature = config.signature || "";
    getConfig.jsApiList = config.jsApiList || [];

    const shareArr = [
      "onMenuShareTimeline",
      "onMenuShareAppMessage",
      "onMenuShareQQ",
      "onMenuShareWeibo",
      "onMenuShareQZone"
    ];

    getConfig.jsApiList = arrConcat(shareArr, getConfig.jsApiList);

    console.log("getConfig.jsApiList");
    console.log(getConfig.jsApiList);

    const {
      debug,
      appId,
      timestamp,
      nonceStr,
      signature,
      jsApiList
    } = getConfig;

    wx.config({
      debug, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId, // 必填，公众号的唯一标识
      timestamp, // 必填，生成签名的时间戳
      nonceStr, // 必填，生成签名的随机串
      signature, // 必填，签名，见附录1
      jsApiList
    });

    wx.error((error) => reject(error));
    wx.ready(() => resolve());
    // resolve();
  });
}

export default config