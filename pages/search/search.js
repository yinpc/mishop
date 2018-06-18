// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kw: '',
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

  kwInput: function (e) {
    this.setData({
      kw: e.detail.value
    })
  },

  inputConfirm: function (e) {
    this.setData({
      kw: e.detail.value
    })
    this.search(e)
  },

  search: function (e) {
    if (this.data.kw) {
      wx.navigateTo({
        url: '../../pages/products/products?kw=' + this.data.kw,
      })
    }
  },

})