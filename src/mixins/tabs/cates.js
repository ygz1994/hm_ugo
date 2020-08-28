import wepy from 'wepy'
export default class extends wepy.mixin {
  data = {
  // 商品列表数据
  categoryList:[]
  };
  onLoad() {
    this.getCategoryList();

  }
  // 获取数据
 async getCategoryList(){
    const {data:res} =await wepy.get('/categories')
    console.log(res);
    if(res.meta.status!==200){
      return wepy.alert()
    }
    this.categoryList = res.message;
    this.$apply()
  }
  
methods= {
  
}

}