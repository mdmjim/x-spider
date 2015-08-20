var trx=require("../../utility/query_trx");
var fs = require('fs');
//var Item=require("../../models/ec_item");

exports.start=function(url,splitFunc,itmFunc,nextFunc,saveFunc){

 var items={};

 var get_new_items=function(page){
   var html=page.content+"";
   fs.write("html.html", html, 'w');
   //console.log(html);
   var tags=splitFunc(html);
   if(tags==null||tags.length==0 || tags==undefined){
     console.log("Invalid splitFunc");
     return;
   }
   console.log("tags:"+tags.length);
   var fails=0;
   for(var i=0;i<tags.length;i++){
     //console.log(tags[i]);
     var itm=itmFunc(tags[i]);
     //console.log(JSON.stringify(itm, undefined, 4));
     if(itm==null || itm.DetailUrl==null ||itm.DetailUrl==""){
       fails++;
       console.log(fails+"th Failed to get itm ");
       continue;
     }
     items[itm.DetailUrl]=itm;
   }
 };

 var continueFunc=function(){
   var _itms=[];

   for(var key in items){
     _itms.push(items[key]);
   }
   saveFunc(_itms);
 }

 trx.start(url,get_new_items,nextFunc,continueFunc);

}
