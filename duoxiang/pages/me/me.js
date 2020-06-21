// pages/me/me.js
Page({
  data: {
    thumb: '',
    nickname: '',
    orders: [],
    hasAddress: false,
    address: {},
    userInfo:{
      avatarUrl:'https://img.yzcdn.cn/vant/cat.jpeg'
    }
  },


  getUserInfo(res){
    console.log(res)
    var userInfo = res.detail.userInfo
    this.setData({
      userInfo:userInfo
    })
    this.login(userInfo,'123456')
  },

  login(userInfo,password) {
    wx.login({
      success: function(res) {
        if (res.code) {
          wx.request({
            method:'post',
            url: 'http://localhost:8080/auth/login',
            data: {
              user:{
                ...userInfo,
                username: userInfo.nickName
              }, // 用户
              // password: password, // 用户输入的密码
              code: res.code
            },

            success: function(res) {
              // 登录成功
              if (res.statusCode === 200) {
                console.log(res.data.sessionId)// 服务器回包内容
              }
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },



  onLoad() {
    var self = this;
    /**
     * 获取用户信息
     */
    // wx.getUserInfo({
    //   success: function (res) {
    //     self.setData({
    //       thumb: res.userInfo.avatarUrl,
    //       nickname: res.userInfo.nickName
    //     })
    //   }
    // }),
    //
    //   /**
    //    * 发起请求获取订单列表信息
    //    */
    //   wx.request({
    //     url: 'http://www.gdfengshuo.com/api/wx/orders.txt?id:1',
    //     success(res) {
    //       self.setData({
    //         orders: res.data
    //       })
    //     }
    //   })
  },
  onShow() {
    var self = this;
    /**
     * 获取本地缓存 地址信息
     */
    wx.getStorage({
      key: 'address',
      success: function (res) {
        self.setData({
          hasAddress: true,
          address: res.data
        })
      }
    })
  },

})
