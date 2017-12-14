export default function share(data, success, cancel) {
  let Info = {};
  let successCB;
  let cancelCB;
  if (data && typeof data === "object") {
    Info = data;
  }

  if (success && typeof success === "function") {
    successCB = success;
  }

  if (cancel && typeof cancel === "function") {
    cancelCB = cancel;
  }

  const { title, link, imgUrl, desc } = Info;

  window.wx.onMenuShareTimeline({
    title, // 分享标题
    link, // 分享链接
    imgUrl, // 分享图标
    success() {
      successCB ? successCB() : null;
    },
    cancel() {
      cancelCB ? cancelCB() : null;
    }
  });
  window.wx.onMenuShareAppMessage({
    title, // 分享标题
    desc, // 分享描述
    link, // 分享链接
    imgUrl, // 分享图标
    type: "", // 分享类型,music、video或link，不填默认为link
    dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
    success() {
      successCB ? successCB() : null;
    },
    cancel() {
      cancelCB ? cancelCB() : null;
    }
  });
  window.wx.onMenuShareQQ({
    title, // 分享标题
    desc, // 分享描述
    link, // 分享链接
    imgUrl, // 分享图标
    success() {
      successCB ? successCB() : null;
    },
    cancel() {
      cancelCB ? cancelCB() : null;
    }
  });
  window.wx.onMenuShareWeibo({
    title, // 分享标题
    desc, // 分享描述
    link, // 分享链接
    imgUrl, // 分享图标
    success() {
      successCB ? successCB() : null;
    },
    cancel() {
      cancelCB ? cancelCB() : null;
    }
  });
  window.wx.onMenuShareQZone({
    title, // 分享标题
    desc, // 分享描述
    link, // 分享链接
    imgUrl, // 分享图标
    success() {
      successCB ? successCB() : null;
    },
    cancel() {
      cancelCB ? cancelCB() : null;
    }
  });
}
