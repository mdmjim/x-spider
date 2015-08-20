var ali1688=require("../query_scripts/ec_item/ali1688");
var url="http://s.1688.com/selloffer/offer_search.htm?keywords=iphone&n=y&spm=a260k.635.1998096057.d1"
ali1688.query(url,function(itms){
  console.log(JSON.stringify(itms, undefined, 4));
  console.log("got "+itms.length+" items");
	phantom.exit();
});
//
// var trx=require("../utility/query_trx");
//
// trx.start(url,function(page){
//    console.log("start to get new item");
// },function(page){
//   console.log("start to click next ");
// },function(){
//   console.log("exit");
//   phantom.exit();
// })

// var html='<a href="http://click.p4p.1688.com/ci_bb?a=318244166&e=.6daH9rVvsvlFlFwffJMNLSAl58cknTtaFABgJwqp1O8uDPdTBGPINBCJ4eZBzXUndOqPzeGX.Ba.0KN9KxEfAWxsfDIJUzblDkvwiObIvkgS1z1uMD3UTDNcMYo7.cv2PUx.XymkvCTHSMbUq1YE17fn5WB5Kfnxg-LB62CYBVxrf.HUK8rgxV3gXvoBNxa6elGlPK3z.zG9AM4kSixXgRn2y7TOy1fK0eXdmA8SHTMTnYRAC28YQ5CYRWqWZYQfIp7YMRpFez8qJEgPdA3R6J4YHnkrSfJlchapQjoNvdaTZWCD.2xPpTbVNaQxWn65x4nbsH6r4zLZFrCH-gH9My9nDkMyUFQuFDZi5IqXL2Co3iRp7deFSiYkBge2nKb445Ov4Ad0Ue2KCr6NTxK5bsImMQ4U.8plcCT4ByCGfFgjolD7BnanvKjhwH1LV5k32HKm.uNZV8eQ-N1zMZ8MQ__&v=3&ap=2&rp=2"';
//
// var str=require("../utility/stringExt").New(html);
// console.log(str.GetAttr("href").Value);
// phantom.exit();




     
