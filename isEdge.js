var userAgent = navigator.userAgent;
var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
var isEdge = userAgent.indexOf("Edge") > -1 && !isIE;
module.exports = function () {
    return isEdge;
}