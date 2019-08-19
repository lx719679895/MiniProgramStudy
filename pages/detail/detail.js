// pages/detail/detail.js
let listData = require('../../datas/list_data.js').list_data
let appData = getApp().data
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: '',
    detailObj: {},
    isCollected: false,
    isPlay: false,
    innerAudioContext: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let index = options.index
    this.setData({
      index,
      detailObj: listData[index]
    })

    let storageCollected = wx.getStorageSync('isCollected')
    if (storageCollected) {
      this.setData({
        isCollected: storageCollected[index] || false
      })
    }

    this.setData({
      innerAudioContext: appData.innerAudioContext
    })
    if (appData.isPlay && appData.playIndex === index) {
      this.setData({
        isPlay: true
      })
    }
  },

  handleCollection() {
    let isCollected = !this.data.isCollected
    this.setData({
      isCollected
    })

    let title = isCollected ? '收藏成功！' : '取消收藏成功！'
    wx.showToast({
      title,
      icon: 'success'
    })

    let {index} = this.data
    var obj = {}
    obj[index] = isCollected

    wx.getStorage({
      key: 'isCollected',
      success: (res) => {
        obj = {...res.data, ...obj}
        wx.setStorage({
          key: 'isCollected',
          data: obj
        })
      },
      fail: () => {
        wx.setStorage({
          key: 'isCollected',
          data: obj
        })
      }
    })
  },

  handleShare() {
    wx.showActionSheet({
      itemList: ['分享到朋友圈', '分享给好友', '分享到qq', '分享到微博'],
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
    // this.data.innerAudioContext.stop()
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
  handleMusicImage() {
    let isPlay = !this.data.isPlay
    const {innerAudioContext} = this.data
    innerAudioContext.src = this.data.detailObj.music.dataUrl
    if (isPlay){
      innerAudioContext.play()
    } else {
      innerAudioContext.pause()
    }

    this.setData({
      isPlay
    })

    appData.isPlay = isPlay
    appData.playIndex = this.data.index
  }
})
