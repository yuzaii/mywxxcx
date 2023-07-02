// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorList: [],
    isLoading: false
  },
  getColor() {
    this.setData({
      isLoading: true
    })
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: 'https://duan.yinboxx.com/color',
      method: 'GET',
      // 结构数据
      success: ({ data: res }) => {
        console.log(res);
        this.setData({
          // 拼接列表
          colorList: [...this.data.colorList, ...res.data]
        })
      },
      complete: () => {
        wx.hideLoading(),
          this.setData({
            isLoading: false
          })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if (this.data.isLoading) return
    this.getColor()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

    console.log('触底');
    this.getColor()

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})