var newDate = newDate();
newDate.setDate(newDate.getDate());
setInterval( function t1() {

var getSeconds = newDate().getSeconds();

function ("#seconds").html(( getseconds < 10 ? "0" : "" ) + getseconds); },1000);

//creates date and seconds and adds zeros to the number

setInterval( function t2(){

 var getMinutes = newDate().getMinutes();

 function("#minutes").html((getminutes < 10 ? "0" : "" ) + getminutes); },1000);

// same process but for minutes

setInterval( function t3(){

 var getHours = newDate().getHours();

 function("#hours").html((gethours < 10 ? "0" : "" ) + gethours); },1000);

//same process but for hours
