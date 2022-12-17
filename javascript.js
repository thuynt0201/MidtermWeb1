var curDate = new Date();
var curDay = curDate.getDate();
var curMonth = curDate.getMonth() + 1;
var curYear = curDate.getFullYear();
document.getElementById('current-time').innerHTML = curDay + "/" + curMonth + "/" + curYear +'"';