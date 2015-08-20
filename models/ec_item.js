
function ECItem(){
  this.Title="";
  this.DetailUrl="";
  this.ProductImg="";
  this.SoldNum=0;
  this.Price=0;
  this.ShopName="";
  this.ShopUrl="";
}

exports.New=function(){
  return new ECItem();
}
