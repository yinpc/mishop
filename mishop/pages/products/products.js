// pages/products/products.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kw: '',
    generalSelected: true,
    sortClass: '',
    hasFound: true,
    searchList: [],
    recommendList: [],
    showCategory: false,
    categoryList: ["小米系列", "红米系列", "华米系列"],
    currentCategory: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var list = this.data.categoryList
    list.unshift("全部")
    this.setData({
      kw: options.kw,
      categoryList: list
    });
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

  /**
   * 用户点击排序
   */
  sortTap: function (e) {
    this.setData({
      generalSelected: false,
      showCategory: false,
      sortClass: !this.data.sortClass ? 'asc-active' : (this.data.sortClass === 'asc-active' ? 'desc-active' : 'asc-active')
    })
  },

  /**
   * 用户点击分类
   */
  categoryTap: function (e) {
    this.setData({
      // generalSelected: false,
      // sortClass: '',
      showCategory: !this.data.showCategory
    })
  },
  hiddenCategory: function (e) {
    this.setData({
      showCategory: false
    })
  },
  generalTap: function (e) {
    this.setData({
      generalSelected: true,
      sortClass: '',
      showCategory: false
    })
  },
  categorySelect: function(e){
    this.setData({
      currentCategory: e.target.dataset.idx
    })
    this.hiddenCategory()
  },
  searchTap: function (e) {
    wx.navigateBack({
      delta: 1
    })
  }
})