window.onload = function() {
    var oLogin = document.querySelector('.login-box a');
    var oFormBox = document.querySelector('.form-box');
    var oClose = oFormBox.children[0];
    oLogin.onclick = function() {
        oFormBox.style.display = 'block';
        setTimeout(function() {
            oFormBox.style.WebkitTransition = '.5s all ease';
            oFormBox.style.opacity = 1;
            oFormBox.style.WebkitTransform = 'scale(1,1)';
        }, 0);
    };
    oClose.onclick = function() {
        oFormBox.style.opacity = 0;
        oFormBox.style.WebkitTransform = 'scale(4,4)';

        function tranEnd() {
            oFormBox.removeEventListener('transitionend', tranEnd, false);
            oFormBox.style.display = 'none';
        }
        oFormBox.addEventListener('transitionend', tranEnd, false);
    };

};
