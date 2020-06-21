// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 'home',
    list: [
      {
        "url": "/pages/home/home",
        "icon": "wap-home-o",
        "text": "首页",
        "name":'home'
      },  
      {
        "url": "/pages/classify/classify",
        "icon": "wap-home-o",
        "text": "分类",
        "name":'classify'
      },  
      {
        "url": "/pages/order/order",
        "icon": "wap-home-o",
        "text": "订单",
        "name":'order'
      },
      {
        "url": "/pages/me/me",
        "icon": "user-circle-o",
        "text": "我的",
        "name":'me'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods:{
    onChange(event) {
      this.setData({ active: event.detail });
      wx.switchTab({url:this.data.list.find(it => it.name === event.detail).url})
    },
    init() {
      const page = getCurrentPages().pop();
      this.setData({
        active: this.data.list.find(it => it.url === `/${page.route}`).name
      });
    },
  },
})
