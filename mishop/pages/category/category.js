// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,  //对应样式变化
    indicatorY: 0,
    categoryArray: ['手机', '居家', '家电', '服饰', '智能', '影音', '笔记本', '餐厨', '洗护', '饮食', '健康', '日杂', '配件', '出行', '婴童'], //左侧导航栏内容  
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