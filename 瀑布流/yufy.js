function rnd(n, m) {
	return Math.floor(Math.random() * (m - n) + n);

}

function createLi() {//随机创建大小不一的图片
	var oLi = document.createElement('li');
	oLi.style.background = 'rgb(' + rnd(0, 256) + ',' + rnd(0, 256) + ',' + rnd(0, 256) + ')';
	oLi.style.height = rnd(100, 400) + 'px';
	return oLi;
}
window.onload = function() {
	var oFlow = document.getElementById('flow');
	var aUl = oFlow.children;
	var arr = [];
	for(var i = 0; i < aUl.length; i++) {
		arr.push(aUl[i]);
	}
	var oMin = null;

	function create20() {
		for(var i = 0; i < 20; i++) {
			var oLi = createLi();

			arr.sort(function(ul1, ul2) {
				return ul1.offsetHeight - ul2.offsetHeight;
			});
			arr[0].appendChild(oLi);
		}
	}
	create20();

	window.onscroll = function() {//懒加载
		var maxScroll = document.body.offsetHeight - document.documentElement.clientHeight;
		var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollT >= maxScroll) { // 或者用可视框的高度加上body的scrolltop >= 整个body的高度
			create20();
		}
	};
};