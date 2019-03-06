function getPos(obj) {//获取绝对位置
	var l = 0,
		t = 0;
	while(obj) {
		l += obj.offsetLeft;
		t += obj.offsetTop;
		obj = obj.offsetParent;
	}
	return {
		left: l,
		top: t
	};
}

function xTop(oDiv1, oDiv2, divT) {
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	if(scrollTop >= divT) {
		oDiv1.style.position = 'fixed';
		oDiv1.style.left = 0;
		oDiv1.style.top = 0;
		oDiv2.style.display = 'block';
	} else {
		oDiv1.style.position = '';
		oDiv2.style.display = 'none';
	}
}
window.onload = function() {
	var oDiv1 = document.getElementById('div1');
	var oDiv2 = document.getElementById('div2');
	var divT = getPos(oDiv1).top;
	window.onscroll = function() {
		xTop(oDiv1, oDiv2, divT);
	};
};