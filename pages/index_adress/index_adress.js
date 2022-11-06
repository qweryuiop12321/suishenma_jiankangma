// pages/index_address/index_address.js 
var util_s = require('../../utils/util_s.js');
const app = getApp()

Page({
  data: {
    title_list: ['', '', '', ''],
    address_list: ['', '', '', ''],
    checked_address: -1,
  },

  ischecked_func: function ({ currentTarget }) {
    this.setData({
      checked_address: currentTarget.id,
    })
  },
  input_handler: function (e) {
    if (e.target.id == "title") {
      switch (this.data.checked_address) {
        case '0':
          this.setData({
            ["title_list[0]"]: e.detail.value,
          }); break;
        case '1':
          this.setData({
            ["title_list[1]"]: e.detail.value,
          }); break;
        case '2':
          this.setData({
            ["title_list[2]"]: e.detail.value,
          }); break;
        case '3':
          this.setData({
            ["title_list[3]"]: e.detail.value,
          });
          break;
      }
    }
    if (e.target.id == "address") {
      switch (this.data.checked_address) {
        case '0':
          this.setData({
            ["address_list[0]"]: e.detail.value,
          }); break;
        case '1':
          this.setData({
            ["address_list[1]"]: e.detail.value,
          }); break;
        case '2':
          this.setData({
            ["address_list[2]"]: e.detail.value,
          }); break;
        case '3':
          this.setData({
            ["address_list[3]"]: e.detail.value,
          }); break;
      }
    }
  },

  save_address: function (e) {
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面
    if (this.data.checked_address == -1) {
      return
    }
    prevPage.setData({
      ["title"]: this.data.title_list[this.data.checked_address],
      ["address"]: this.data.address_list[this.data.checked_address],
      ["default_address"]: false
    })
    wx.navigateBack({
      delta: 1,
    })
  },

  exit: function (e) {
    wx.navigateBack({
      delta: 1,
    })
  },
  onLoad: function (query) {
    try {
      const res = wx.getStorageInfoSync()
      if (res.keys.length > 0) {
        this.setData({
          title_list: wx.getStorageSync('title_list'),
          address_list: wx.getStorageSync('address_list'),
        })
      } else {
        this.setData({
          title_list: ['', '', '', ''],
          address_list: ['', '', '', ''],
        })
        console.log("No cache address data.")
      }
    } catch (e) {
      console.log("sotrage load error!")
    };
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面
    prevPage.setData({
      ["default_address"]: true,
    })
  },
  onUnload: function () {
    wx.setStorage({
      key: "title_list",
      data: this.data.title_list,
    })
    wx.setStorage({
      key: "address_list",
      data: this.data.address_list,
    })

    this.data.require
  },

})


