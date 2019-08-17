// pages/movieDetail/movieDetail.js
let pageData = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    castStr: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let val = pageData.data.movieList[options.index]
    let casts = val.casts
    let castStr = ''
    if (casts.length) {
      casts.forEach(el => {
        castStr += el.name + ' '
      })
    }
    this.setData({
      detail: val,
      castStr
    })
    console.log(this.data.detail)
    wx.setNavigationBarTitle({
      title: val.title
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

  }
})