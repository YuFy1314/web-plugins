function changeDrag(oBox, oItem) {//拉拽九宫格
	oItem.onmousedown = function(ev) {
		var oEvent = ev || event;
		var oldW = oBox.offsetWidth,
			oldH = oBox.offsetHeight,
			oldL = oBox.offsetLeft,
			oldT = oBox.offsetTop,
			oldX = oEvent.clientX,
			oldY = oEvent.clientY;
		document.onmousemove = function(ev) {
			var oEvent = ev || event;
			if(oItem.className.indexOf('l') != -1) {
				oBox.style.width = oldW - (oEvent.clientX - oldX) + 'px';
				oBox.style.left = oldL + (oEvent.clientX - oldX) + 'px';
			}
			if(oItem.className.indexOf('t') != -1) {
				oBox.style.height = oldH - (oEvent.clientY - oldY) + 'px';
				oBox.style.top = oldT + (oEvent.clientY - oldY) + 'px';
			}
			if(oItem.className.indexOf('b') != -1) {
				oBox.style.height = oEvent.clientY - oldY + oldH + 'px';
			}
			if(oItem.className.indexOf('r') != -1) {
				oBox.style.width = oEvent.clientX - oldX + oldW + 'px';
			}
		};
		document.onmouseup = function() {
			document.onmousemove = null;
			document.onmouseup = null;
			oItem.releaseCapture && oItem.releaseCapture();
		};
		oEvent.cancelBubble = true;
		oItem.setCapture && oItem.setCapture();
		return false;
	};
}

function drag(id) {//拖拽整体
	var oBox = document.getElementById(id);
	oBox.onmousedown = function(ev) {
		var oEvent = ev || event;
		var disX = oEvent.clientX - oBox.offsetLeft;
		var disY = oEvent.clientY - oBox.offsetTop;
		document.onmousemove = function(ev) {
			var oEvent = ev || event;
			oBox.style.left = oEvent.clientX - disX + 'px';
			oBox.style.top = oEvent.clientY - disY + 'px';
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
	var oBox = document.getElementById('box');
	var aDiv = oBox.children;
	for(var i = 0; i < aDiv.length; i++) {
		changeDrag(oBox, aDiv[i]);
	}
	drag('box');
};