window.onload = function() {
    if (window.navigator.userAgent.indexOf('MSIE 6.0') != -1) {
        var oAd = document.getElementById('ad');
        window.onscroll = function() {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var clientHeight = document.documentElement.clientHeight;
            oAd.style.top = clientHeight - oAd.offsetHeight + scrollTop + 'px';
        };
    }
};
