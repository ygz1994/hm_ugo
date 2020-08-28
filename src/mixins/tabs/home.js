import wepy from 'wepy'
export default class extends wepy.mixin {
  data = {
    // 轮播图数据
    swiperList: [],
    cateItems: [],
    floorData: []
  };
  onLoad() {
    this.getSwiperData();
    this.getCateItems();
    // 在页面加载完毕后，自动获取楼层数据
    this.getFloorData()
  }

  // 获取轮播图数据的函数、
  async getSwiperData() {
    const { data: res } = await wepy.get('/home/swiperdata');
    // console.log(res);
    if (res.meta.status !== 200) {
      return wepy.alert();
    }
    this.swiperList = res.message;
    this.$apply();
  }
  // 获取首页分类相关的数据项
  async getCateItems() {
    const { data: res } = await wepy.get('/home/catitems')
    // console.log(res);
    if (res.meta.status !== 200) {
      return wepy.alert();
    }
    this.cateItems = res.message;
    this.$apply()
  }
  // 获得楼层数据
  async getFloorData() {
    const { data: res } = await wepy.get('/home/floordata')
    // console.log(res);
    if (res.meta.status !== 200) {
      return wepy.alert()
    }
    // console.log(res);
    this.floorData = res.message
    this.$apply()
  }
methods= {
  goGoodsList(url) {
    // console.log(url);
    wepy.navigateTo({url})
  }
}

}