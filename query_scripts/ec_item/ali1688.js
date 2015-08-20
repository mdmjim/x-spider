 var base=require("./base");
 var Item=require("../../models/ec_item");
 var str=require("../../utility/stringExt").New("");

exports.query=function(url,saveFunc){

  var splitFuc=function(html){
    return html.split("id=\"offer");
  }

	var itmFunc=function(tag){
      var itm=Item.New();
      //sw-dpl-offer-title
      itm.Title=str.SetValue(tag).GetAttr("title").Value;
      itm.DetailUrl=str.SetValue(tag).SubAfter("sw-dpl-offer-photo").GetAttr("href").Replace("&amp;","&").Value;
      itm.ProductImg=str.SetValue(tag).GetAttr("src").Replace("&amp;","&").Value;
      //sw-dpl-offer-companyName
      itm.ShopName=str.SetValue(tag).SubAfter("sw-dpl-offer-companyName").GetAttr("title").Value;
      itm.ShopUrl=str.SetValue(tag).SubAfter("sw-dpl-offer-companyName").GetAttr("href").Replace("&amp;","&").Value;
      //sw-dpl-offer-priceNum
      itm.Price=str.SetValue(tag).SubAfter("sw-dpl-offer-priceNum").ExDouble();
      //sw-dpl-offer-trade
      itm.SoldNum=str.SetValue(tag).SubAfter("sw-dpl-offer-trade").ExInt();
      //console.log(tag);
      return itm;
	};

	var nextFunc=function(page){
	}

	base.start(url,splitFuc,itmFunc,nextFunc,saveFunc);
}
