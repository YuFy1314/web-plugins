window.onload = function() {
    var bOk = false;
    var aLi = document.querySelectorAll('ul li');
    var oPrev = document.querySelector('.prev');
    var oNext = document.querySelector('.next');
    var aClass = [];
    var len = aLi.length;
    for (var i = 0; i < len; i++) {
        aClass.push(aLi[i].className);
    }
    oNext.onclick = function() {
        if (bOk) return;
        bOk = true;
        aClass.unshift(aClass.pop());
        changeClass();
    };
    oPrev.onclick = function() {
        if (bOk) return;
        bOk = true;
        aClass.push(aClass.shift());
        changeClass();
    };

    function changeClass() {
        for (var i = 0; i < len; i++) {
            aLi[i].className = aClass[i];
        }
        var oCur = document.querySelector('.cur');

        function tranEnd() {
            oCur.removeEventListener('transitionend', tranEnd, false);
            bOk = false;
        }
        oCur.addEventListener('transitionend', tranEnd, false);
    }

};
