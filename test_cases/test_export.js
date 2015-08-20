exports.test =function(name,seed){
  var i=0;
  var inter=1000+seed;
  var interval=setInterval(function(){
      i++;
      console.log(name +" "+i);
  },inter);
}
