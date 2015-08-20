function StringOp(input){
	 this.Value=input;
}

StringOp.prototype.SetValue=function(a){
	this.Value=a;
	return this;
}

StringOp.prototype.IsNullOrEmpty=function(){
	return this.Value ==null || this.Value ==undefined || this.Value==="";
}

StringOp.prototype.GetLength=function(){
	if(this.IsNullOrEmpty())
	return 0;
	return this.Value.length;
}

StringOp.prototype.StrIsNullOrEmpty=function(pat){
	return pat ==undefined || pat ==null || pat =="";
}

StringOp.prototype.GetIndexOf=function(pat){
	if(this.IsNullOrEmpty())
	   return -1;
		if(this.StrIsNullOrEmpty(pat))
		return -1;
		return this.Value.indexOf(pat);
}

StringOp.prototype.GetLastIndexOf=function(pat){
	if(this.IsNullOrEmpty())
	   return -1;
		if(this.StrIsNullOrEmpty(pat))
		return -1;
		return this.Value.lastIndexOf(pat);
}

StringOp.prototype.ExInt=function(){
	if(this.IsNullOrEmpty())
	    return null;
	return this.Value.match(/\d+/)+"";
}

StringOp.prototype.ExDouble=function(){
	if(this.IsNullOrEmpty())
	    return null;
	return this.Value.match(/\d+\.{0,1}\d*/)+"";
}


StringOp.prototype.SubAfter=function(pat){
		var ind= this.GetIndexOf(pat);
		if(ind>=0&&ind+pat.length<this.Value.length){
			this.Value=this.Value.substr(ind+pat.length);
		}else {
			this.Value="";
		}
		return this;
}

StringOp.prototype.SubLastAfter=function(pat){
		var ind= this.GetLastIndexOf(pat);
		if(ind>=0&&ind+pat.length<this.Value.length){
			this.Value=this.Value.substr(ind+pat.length);
		}else {
			this.Value="";
		}
		return this;
}

StringOp.prototype.SubLastBefore=function(pat){
		var ind= this.GetLastIndexOf(pat);
		if(ind>0){
			this.Value=this.Value.substr(0,ind);
		}else {
			this.Value="";
		}
		return this;
}

StringOp.prototype.SubBefore=function(pat){
	var ind= this.GetIndexOf(pat);
	if(ind>0){
		this.Value=this.Value.substr(0,ind);
	}else {
		this.Value="";
	}
	return this;
}

StringOp.prototype.Replace=function(old_v,new_v){
	if(this.IsNullOrEmpty())
	  return this;
		this.Value=this.Value.replace(old_v ,new_v);
		return this;
}

StringOp.prototype.Split=function(pat){
	if(this.IsNullOrEmpty())
	  return null;
	 return this.Value.split(pat);
}

StringOp.prototype.GetAttr=function(attr){
	return this.SubAfter(attr+"=").SubAfter('"').SubBefore('"');
}

StringOp.prototype.JoinLeft=function(val){
	 if(this.StrIsNullOrEmpty(val))
	return this;
	if(this.IsNullOrEmpty())
	this.Value=val;
	else
	this.Value=val +this.Value;
	return this;
}

StringOp.prototype.JoinRight=function(val){
	 if(this.StrIsNullOrEmpty(val))
	return this;
	if(this.IsNullOrEmpty())
	this.Value=val;
	else
	this.Value=this.Value+val;
	return this;
}

exports.New=function(val){
	return new StringOp(val);
};
