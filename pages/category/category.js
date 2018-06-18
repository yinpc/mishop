// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,  //对应样式变化
    indicatorY: 0,
    // categoryArray: ['手机', '居家', '家电', '服饰', '智能', '影音', '笔记本', '餐厨', '洗护', '饮食', '健康', '日杂', '配件', '出行', '婴童'], //左侧导航栏内容
    categoryList: [],
    subcategoryList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: 'http://192.168.28.205:8000/category/',
      data: {
        category_type: '1'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.length > 0) {
          // var categoryList = []
          // for (var i = 0; i < res.data.length; i++) {
          //   categoryList.push(res.data[i]['name'])
          // }
          _this.setData({
            categoryList: res.data,
            subcategoryList: res.data[0]['subcategories']
          })
        }

      }
    })
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

  navbarTap: function (e) {
    var that = this
    console.log(e)
    this.setData({
      currentTab: e.currentTarget.id,
      indicatorY: 100 * e.currentTarget.id
    })

  },

  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
  },
})