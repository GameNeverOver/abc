const {createProxyMiddleware} = require('http-proxy-middleware')
// https://douban.uieee.com/v2/movie/top250
// http://www.baidu.com/s?wd=关键字

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/v2', {  //`api`是需要转发的请求 
      target: 'https://douban.uieee.com',  // 这里是接口服务器地址
      changeOrigin: true,
    })
  );
//   app.use(
//     createProxyMiddleware('/s', {  //`api`是需要转发的请求 
//       target: 'http://www.baidu.com',  // 这里是接口服务器地址
//       changeOrigin: true,
//     })
//   );
}