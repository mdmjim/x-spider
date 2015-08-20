var fail_timeout_rescue_continue=require("./fail_timeout_rescue_continue")

exports.start=function(url,get_new_item_func,click_next,continueFunc,
	scrol_seed,timeout_milliseconds){
  scrol_seed =scrol_seed==undefined || scrol_seed==null ? 300:scrol_seed;
	timeout_milliseconds=timeout_milliseconds==undefined|| timeout_milliseconds==null ? 10000
	    :timeout_milliseconds;

	var page=require("webpage").create();

  var page_height=0;
	var fail_get_new_item_func=function(){
		console.log("start to get new item");
		get_new_item_func(page);
		var height=page.evaluate(function(){
			var body = document.body,
    	html = document.documentElement;
      var height = Math.max( body.scrollHeight, body.offsetHeight,
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
			return height;
		});
		console.log("document height:"+height);
		page.scrollPosition={left:0,top:height+scrol_seed};

		if(Math.abs(height-page_height)<scrol_seed/2){
			return true;
		}
		page_height=height;
		return false;
	}

	var click_next_wrapper=function(){
		click_next(page);
	}

	var continueFuncWraper=function(){
		page.render("test.png");
		page.close();
		continueFunc();
	}

	page.open(url,function(status){
		console.log(status,url);
         if(status ==="success"){
            fail_timeout_rescue_continue.start(fail_get_new_item_func,
            	timeout_milliseconds,
            	click_next_wrapper,
            	continueFuncWraper);
         }else{
         	page.close();
         	continueFunc();
         }
	});

}
