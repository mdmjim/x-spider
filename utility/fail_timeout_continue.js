exports.start=function(failedFunc,timeout_milliseconds,continueFunc){
	//起始时间
	var start_at=new Date().getTime();
	var failed=false;
	var timespan=0;
	var interval=setInterval(function(){
		failed=(typeof(failedFunc)==="string" ? eval(failedFunc):failedFunc());
        timespan=new Date().getTime()-start_at;
		if (!failed){
			start_at=new Date().getTime();
			console.log("succ at "+timespan);
		}else if(timespan>=timeout_milliseconds){
			console.log("fialed:"+ timespan);
			clearInterval(interval);
			continueFunc();
		} else {
			console.log("fialed:"+timespan);
			console.console.log();

		}
	},100);//repeat check if failed,
	//if failedFunc return true  in timeout_milliseconds ,then exsit.
}
