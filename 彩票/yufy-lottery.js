function rnd(n, m) {//随机数
	return parseInt(Math.random() * (m - n) + n);
}

function findInArr(arr, iNum) {//在数组中查一个数
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] == iNum) {
			return true;
		}
	}
	return false;
}
window.onload = function() {
	var oSelect = document.getElementById('select');
	var oBox = document.getElementById('box');
	var timer = null;
	var timer2 = null;
	oSelect.onclick = function() {
		clearInterval(timer);
		clearTimeout(timer2);
		timer = setInterval(function() {
			var arr = [];
			while(arr.length < 6) {
				var num = rnd(1, 33);
				if(!findInArr(arr, num)) {
					arr.push(num);
				}
			}
			oBox.innerHTML = arr;
		}, 50);
		timer2 = setTimeout(function() {
			clearInterval(timer);
		}, 500);
	}
}