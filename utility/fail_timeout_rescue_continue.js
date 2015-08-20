exports.start=function(failedFunc,timeout_milliseconds,rescueFunc,continueFunc){
	//起始时间
	var start_at=new Date().getTime(),new_start_at=new Date().getTime();
	var failed=false;
	var timespan=0;
	var interval=setInterval(function(){
	failed=(typeof(failedFunc)==="string" ? eval(failedFunc):failedFunc());
  timespan=new Date().getTime()-new_start_at;
	if (!failed){
			new_start_at=new Date().getTime();
			console.log("succ at "+timespan);
	}else if(timespan>=2*timeout_milliseconds){
		console.log("exsit:"+ timespan +" total:"+(new Date().getTime()-start_at));
		clearInterval(interval);
		continueFunc();
  } else if(timespan>=timeout_milliseconds){
		rescueFunc();
		console.log("rescue fialed:"+timespan);
	} else {
			console.log("fialed:"+timespan);
	}
},500);//repeat check if failed,
	//if failedFunc return true  in timeout_milliseconds ,then exsit.
}
