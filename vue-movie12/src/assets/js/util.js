//公用的工具方法都写在这里

export default {
  install(Vue, options) {
    Vue.prototype.getImage = function (url) {
      // 把现在的图片连接传进来，返回一个不受限制的路径
      let imgUrl = ''
      if (url !== undefined) {
        if (url.indexOf('http://') != -1) {
          imgUrl = url.replace(/http:\/\//g, 'https://images.weserv.nl/?url=');
        } else if (url.indexOf('https://') != -1) {
          imgUrl = url.replace(/https:\/\//g, 'https://images.weserv.nl/?url=');
        } else {
          imgUrl = 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
        }
        return imgUrl
      }
    }

  }
}
