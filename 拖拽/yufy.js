function drag(id) {
	var oBox = document.getElementById(id);
	oBox.onmousedown = function(ev) {
		var oEvent = ev || event;
		var disX = oEvent.clientX - oBox.offsetLeft;
		var disY = oEvent.clientY - oBox.offsetTop;
		document.onmousemove = function(ev) {
			var oEvent = ev || event;
			var l = oEvent.clientX - disX;
			var t = oEvent.clientY - disY;
			if(l < 0) {
				l = 0;
			} else if(l > document.documentElement.clientWidth - oBox.offsetWidth) {
				l = document.documentElement.clientWidth - oBox.offsetWidth;
			}

			if(t < 0) {
				t = 0;
			} else if(t > document.documentElement.clientHeight - oBox.offsetHeight) {
				t = document.documentElement.clientHeight - oBox.offsetHeight;
			}

			oBox.style.left = l + 'px';
			oBox.style.top = t + 'px';
		};
		document.onmouseup = function() {
			document.onmousemove = null;
			document.onmouseup = null;
			oBox.releaseCapture && oBox.releaseCapture();
		};
		oBox.setCapture && oBox.setCapture();
		return false;
	};
}
window.onload = function() {
	drag('box');
	drag('box2');
};