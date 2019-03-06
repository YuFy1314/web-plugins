function toDou(iNum) {//将时间变成双位数
	return iNum < 10 ? '0' + iNum : '' + iNum;
}
window.onload = function() {
	var oStrong = document.getElementsByTagName('strong')[0];
	//获取目标时间戳
	var oTargetDate = new Date();
	oTargetDate.setMonth(9, 1);
	oTargetDate.setHours(0, 0, 0, 0);
	var iTarget = oTargetDate.getTime();

	function countDown() {
		var oDate = new Date();
		var iNow = oDate.getTime();
		var s = parseInt((iTarget - iNow) / 1000);

		var d = parseInt(s / 86400);
		s %= 86400;
		var h = parseInt(s / 3600);
		s %= 3600;
		var m = parseInt(s / 60);
		s %= 60;
		oStrong.innerHTML = d + '天 ' + toDou(h) + ':' + toDou(m) + ':' + toDou(s);
	}
	countDown();
	setInterval(countDown, 1000);
};