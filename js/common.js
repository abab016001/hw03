document.addEventListener("DOMContentLoaded", ready);
function ready(){
    Util.LoadHtml("header");
    Util.LoadHtml("footer");
    Util.CheckExcuteFunction();
}

function processSwitchFrame(v) {
    var href = pageHref[v];
    Util.SwitchFrame(href);
}

function processSwitchFrameWithExcute(v, method, paramObj) {
    var href = pageHref[v];
    Util.SwitchFrameWithExcute(href, method, paramObj);
}

var Common = {
    "processSwitchFrame": processSwitchFrame,
    "processSwitchFrameWithExcute": processSwitchFrameWithExcute
};