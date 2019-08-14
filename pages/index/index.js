// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    avator: '',
    canIUse: false
  },

  openHandle() {
    //跳转list页面
    wx.navigateTo({
      url: '/pages/list/list'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //查看是否授权
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          //已经授权，可以直接调用getUserInfo
          wx.getUserInfo({
            success: (res) => {
              var userinfo = res.userInfo
              this.setData({
                name: userinfo.nickName,
                avator: userinfo.avatarUrl,
                canIUse: false
              })
            },
            fail: (err) => {
              console.log(err);
            }
          })
        } else {
          this.setData({
            canIUse: true
          })
        }
      }
    })
  },

  bindGetUserInfo(e) {
    if (e.detail.rawData) {
      let userInfo = JSON.parse(e.detail.rawData)
      //用户点击了允许
      this.setData({
        name: userInfo.nickName,
        avator: userInfo.avatarUrl,
        canIUse: false
      })
    }
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