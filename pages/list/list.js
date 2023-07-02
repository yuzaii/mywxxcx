// pages/list/list.js
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query: {},
    msg: '66666666',
    time: '',
    count: 0,
    text: '',
    isshow: false,
    array1: ['苹果', '华为', '小米'],
    array2: ['苹果', '华为', '小米'],
    userlist: [
      { userid: 1, name: '张三' },
      { userid: 2, name: '李四' },
      { userid: 3, name: '王五' }
    ]
  },
  goback() {
    wx.navigateBack()
  },
  setshow() {
    this.setData({
      isshow: !this.data.isshow
    })
  },
  add(e) {
    console.log(e.target.dataset.info);
    this.setData({
      count: this.data.count + e.target.dataset.info
    })
  },
  inputhandle(e) {
    console.log(e.detail.value);
    this.setData({
      text: e.detail.value
    })
  },
  gettime(e) {
    // console.log(e);
    const time = util.formatTime(new Date())
    // console.log(this.time);
    this.setData({
      // time:util.formatTime(new Date())
      time: time
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.gettime()
    // console.log(options);
    this.setData({
      query: options
    })
    console.log(this.data.query);
    // const time=util.formatTime(new Date())
    // this.setData({
    //   // time:util.formatTime(new Date())
    //   time:time
    // })
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
    console.log('触发了刷新');
    this.setData({
      count: 0
    })
    wx.stopPullDownRefresh()

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('触底了');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})