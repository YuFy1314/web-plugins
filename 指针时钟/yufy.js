window.onload = function() {
    var oClock = document.querySelector('.clock');
    var oHou = document.querySelector('.clock .hou');
    var oMin = document.querySelector('.clock .min');
    var oSec = document.querySelector('.clock .sec');

    var N = 60; //多少个刻度
    for (var i = 0; i < N; i++) {
        var oSpan = document.createElement('span');
        oSpan.style.WebkitTransform = 'rotate(' + i * 6 + 'deg)';
        if (i % 5 == 0) {
            oSpan.classList.add('big_scale');
            var oEm = document.createElement('em');
            oEm.innerHTML = (i / 5) || 12;
            oEm.style.WebkitTransform = 'rotate(' + -i * 6 + 'deg)';
            oSpan.appendChild(oEm);
        }
        oClock.appendChild(oSpan);
    }

    function clock() {
        var oDate = new Date();
        var h = oDate.getHours();
        var m = oDate.getMinutes();
        var s = oDate.getSeconds();
        var ms = oDate.getMilliseconds();

        oHou.style.WebkitTransform = 'rotate(' + (h * 30 + m / 60 * 30) + 'deg)';
        oMin.style.WebkitTransform = 'rotate(' + (m * 6 + s / 60 * 6) + 'deg)';
        oSec.style.WebkitTransform = 'rotate(' + (s * 6 + ms / 1000 * 6) + 'deg)';
    }
    clock();
    setInterval(clock, 1);

};
