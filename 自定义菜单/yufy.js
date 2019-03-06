window.onload = function() {
    var oMenu = document.getElementById('menu');
    document.oncontextmenu = function(ev) {
        var oEvent = ev || event;
        oMenu.style.left = oEvent.clientX + 'px';
        oMenu.style.top = oEvent.clientY + 'px';
        oMenu.style.display = 'block';
        return false;
    };
    document.onclick = function() {
        oMenu.style.display = 'none';
    };
};
