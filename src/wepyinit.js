import wepy from 'wepy'
/***
 * @str 要提示的消息内容
 * 弹框提示一个无图标的toast消息
 */
wepy.alert = function(str='获取数据失败',isSuccess=false){
  wepy.showToast({
    title:str,
    // 弹框时不携带图标
    icon:isSuccess?'success':'none',
    duration:1500
  })
}
// 请求根路径
const BASE_URL='https://www.uinav.com/api/public/v1'
/**
 * 
 * 微信请求的底层函数，提供部分url地址，数据参数对象和是否为post方法,并返回一个promise对象
 * @param {String} url部分url
 * @param {Object} 数据参数对象（GET为 Querystring, post为body
 * @params {Boolean} 请求的Promise对象
 * @request {Promise} 请求的Promise对象
 * 
 */
/**
 * 发起get请求的API
 * @url请求的地址，为相对路径，必须以/开头
 * @data请求的参数对象
 */
wepy.get =function(url,data={}){
  return wepy.request({
    url:BASE_URL+url,
    method:'get',
    data
  })

}
/**
 * 
 * 发起post请求的API
 * @url请求的地址，为相对路径，必须以/开头
 * @data请求的参数对象
 */
wepy.post =function(url,data={}){
  return wepy.request({
    url:BASE_URL+url,
    method:'POST',
    data
  })

}