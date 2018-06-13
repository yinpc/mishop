Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailImgs: [
      {
        'image': 'http://static.home.mi.com/app/shop/img?id=shop_aa959445abc683f4fb65910ee23500a1.jpeg',
        'isVideo': true,
        'video': 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
      },
      {
        'image': 'http://static.home.mi.com/app/shop/img?id=shop_ca712f1b448fc4678eac20eca850d1d8.jpeg',
        'isVideo': false
      },
      {
        'image': 'https://static.home.mi.com/app/shop/img?id=shop_921b0f879d8ea153bd2469fe70497509.jpeg',
        'isVideo': false
      },
      {
        'image': 'http://static.home.mi.com/app/shop/img?id=shop_7e2212c60ace86222370dd07ac799c29.jpeg',
        'isVideo': false
      },
      {
        'image': 'http://static.home.mi.com/app/shop/img?id=shop_7e8b4fb2b9535554bac0beb371072d43.jpeg',
        'isVideo': false
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  previewImage: function (e) {
    if (e.target.dataset.info.isVideo) return
    var current = e.target.dataset.info.image
    var urls = []
    for (var i = 0; i < this.data.detailImgs.length; i++) {
      if (this.data.detailImgs[i].isVideo) continue;
      urls.push(this.data.detailImgs[i].image)
    }
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: urls // 需要预览的图片http链接列表  
    })
  },

  showVideo: function (e) {
    if (e.target.dataset.info.isVideo){
      wx.navigateTo({
        url: '../video/video?src='+ e.target.dataset.info.video,
      })
    }
  }
})