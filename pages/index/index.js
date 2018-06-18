//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navTab: ["推荐", "蜜蜡", "象牙", "松石", "玛瑙", "翡翠"],
    currentNavtab: "0",
    background: ['https://shop.io.mi-img.com/app/shop/img?id=shop_35c367259a4cd3a0c7d0f44fa2cb41f8.jpeg',
      'https://shop.io.mi-img.com/app/shop/img?id=shop_4ba475e779ed13ccfc1e05f275ad18e6.jpeg',
      'https://shop.io.mi-img.com/app/shop/img?id=shop_5a54041439b5626d6bbf8145e5a120d4.jpeg'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    goods: [],
    screenWidth: 0,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var _this = this
    wx.request({
      url: 'http://192.168.28.205:8000/goods/',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data.results)
        if (res.data.results.length > 0) {
          _this.setData({
            goods: res.data.results
          });
        }
      }
    })
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })

    // }
    
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  searchBoxTap: function (e) {
    wx.navigateTo({
      url: '../../pages/search/search',
    })
  }
})
