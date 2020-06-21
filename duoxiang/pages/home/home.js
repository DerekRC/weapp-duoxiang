// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[
      {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592398309818&di=34b2cb2e0c6b47f6e5afa94b1897a46d&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-05-14%2F5af945817a496.jpg"}
      ,{img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592398309818&di=34b2cb2e0c6b47f6e5afa94b1897a46d&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-05-14%2F5af945817a496.jpg"}
      ,{img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592398309818&di=34b2cb2e0c6b47f6e5afa94b1897a46d&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-05-14%2F5af945817a496.jpg"}
      ,{img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592398309818&di=34b2cb2e0c6b47f6e5afa94b1897a46d&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-05-14%2F5af945817a496.jpg"}
    ],
    menus:[
      {
        img:"img/美食.png",
        text:"美食"
      },{
        img:"img/美甲.png",
        text:"美甲"
      },{
        img:"img/KTV.png",
        text:"KTV"
      },{
        img:"img/护肤.png",
        text:"护肤"
      }, {
        img:"img/美食.png",
        text:"美食"
      },{
        img:"img/美甲.png",
        text:"美甲"
      },{
        img:"img/KTV.png",
        text:"KTV"
      },{
        img:"img/全部.png",
        text:"全部"
      },
    ],
    hotProducts:[
      {
        img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592399164078&di=b6c3e5943c75dbe28746808e18f48a99&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fba4860a4c189c593e8e947562ab21ba1c4efb1053c392-3vGMlL_fw658",
        text:"豪客来正宗经典烤鸡翅..."
      },{
        img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592399164078&di=b6c3e5943c75dbe28746808e18f48a99&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fba4860a4c189c593e8e947562ab21ba1c4efb1053c392-3vGMlL_fw658",
        text:"豪客来正宗经典烤鸡翅..."
      },{
        img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592399164078&di=b6c3e5943c75dbe28746808e18f48a99&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fba4860a4c189c593e8e947562ab21ba1c4efb1053c392-3vGMlL_fw658",
        text:"豪客来正宗经典烤鸡翅..."
      },{
        img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592399164078&di=b6c3e5943c75dbe28746808e18f48a99&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fba4860a4c189c593e8e947562ab21ba1c4efb1053c392-3vGMlL_fw658",
        text:"豪客来正宗经典烤鸡翅..."
      },{
        img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592399164078&di=b6c3e5943c75dbe28746808e18f48a99&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fba4860a4c189c593e8e947562ab21ba1c4efb1053c392-3vGMlL_fw658",
        text:"豪客来正宗经典烤鸡翅..."
      },{
        img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592399164078&di=b6c3e5943c75dbe28746808e18f48a99&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fba4860a4c189c593e8e947562ab21ba1c4efb1053c392-3vGMlL_fw658",
        text:"豪客来正宗经典烤鸡翅..."
      },
    ],
    choicenessProducts:[
      {
        img:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1856257744,310285552&fm=26&gp=0.jpg",
        text:"豪客来正宗经典烤鸡翅，鲜美可口..."
      },
      {
        img:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1856257744,310285552&fm=26&gp=0.jpg",
        text:"豪客来正宗经典烤鸡翅，鲜美可口..."
      },
      {
        img:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1856257744,310285552&fm=26&gp=0.jpg",
        text:"豪客来正宗经典烤鸡翅，鲜美可口..."
      },
    ],
  },

  toBanner(event){
    wx.navigateTo({url:"/pages/hotProduct/hotProduct"})
  },
  toHotPage(event){
    wx.navigateTo({url:"/pages/hotProduct/hotProduct"})
  },
  toChoicenessPage(event){
    wx.navigateTo({url:"/pages/choiceness/choiceness"})
  },
  toProductDetail(event){
    wx.navigateTo({url:"/pages/productDetail/productDetail"})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.getTabBar().init()
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
