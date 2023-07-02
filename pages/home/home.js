// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    category: [
      { name: '虎扑', value: 'huPu' },
      { name: '知乎', value: 'zhihuHot' },
      { name: '抖音', value: 'douyinHot' },
      { name: '哔哩哔哩', value: 'bili' },
      { name: '百度', value: 'baiduRD' },
      { name: '微博', value: 'wbHot' },
    ],
    type: '',
    uptime: '',
    infoList: []
  },
  handleChange(e) {
    const value = e.detail.value

    console.log(e);
    this.setData({
      type: e.detail.value
    })
    console.log(this.data.type);
  },
  // 发起get请求
  getinfo() {

    if (this.data.type === '') {
      wx.showModal({
        title: '提示',
        content: '请先选择平台',
        showCancel: false,
        // success(res) {
        //   if (res.confirm) {
        //     console.log('用户点击确定')
        //   } else if (res.cancel) {
        //     console.log('用户点击取消')
        //   }
        // }
      })
      return
    }
    wx.request({
      url: 'https://api.vvhan.com/api/hotlist',
      method: 'GET',
      data: {
        type: this.data.type
      },
      success: (res) => {
        console.log(res);
        console.log(res.data.data);
        this.setData({
          title: res.data.title,
          infoList: res.data.data,
          uptime: res.data.update_time
        })
      }
    })
  },
  goparams() {
    wx.navigateTo({
      url: '/pages/list/list?name=zs&age=20',
    })
  },
  gotomsg1() {
    // 跳转到非tabbar
    wx.navigateTo({
      url: '/pages/list/list',
    })
  },
  gotomsg() {
    // 跳转到tabbar
    wx.switchTab({
      url: '/pages/message/message',

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})