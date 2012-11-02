var cid = function(id) {
	var tmp = document.getElementById(id);
	return tmp;
},
ctn = function(tn,id) {
	var tmp = !id ? document.body.getElementsByTagName(tn) : cid(id).getElementsByTagName(tn);
	return tmp;
},
ccn = function(cls,id) {
	var tmp = !id ? document.body.getElementsByTagName("*") : cid(id).getElementsByTagName("*"),
		i,
		cl = new Array(),
		j = 0;
	for(i = 0; i < tmp.length; i++) {
		if(tmp[i].className === cls) {
			cl[j] = tmp[i];
			j++;
		};
	};
	return cl;
};