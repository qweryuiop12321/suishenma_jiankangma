 // pages/index_address/index_address.js
var util_s = require('../../utils/util_s.js');
const app = getApp();
Page({
  data:{
      title: "",
      address: "",
  },

  input_handler:function(e){
    console.log(e.target.id)
    console.log(e.detail.value)
    this.setData({
        [e.target.id] : e.detail.value,
    })
  },

  save_address:function(e){
      var pages = getCurrentPages();
      var currPage = pages[pages.length - 1];   //当前页面
      var prevPage = pages[pages.length - 2];  //上一个页面
      if (this.data.title==""){
        this.data.title="通用"
      }
      if (this.data.address==""){
        this.data.address="上海市/徐汇区/龙华路3166弄"
      }
      prevPage.setData({
          ["title"]:this.data.title,
          ["address"]:this.data.address,
          ["default_address"]:false
      })
      wx.navigateBack({
        delta: 1,
      })
  },

  exit:function(e){
      wx.navigateBack({
        delta: 1,
      })
  }
})


 