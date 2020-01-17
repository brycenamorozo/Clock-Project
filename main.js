function startTime() {

  var ampm = "pm"

  var time = new Date();
  
  var h = time.getHours();
 
  var m = time.getMinutes();
  
  var s = time.getSeconds();

  //gets time from date set

  if (h < 12) {
    ampm = "AM"
  }
  if (h > 12) {
    h -=12
    ampm = "PM"
  }
  if (h < 10) {
    h = "0" + h
  }

  /*changes clock from am to pm
    subtracts 12 hours when greater than 12
    and adds pm at end instead of am when 
    greater than 12
  */

  m = checkTime(m);
  s = checkTime(s);

  document.getElementById('time').innerHTML =
  h + ":" + m + ":" + s + " " + ampm;
  var t = setTimeout(startTime, 500);
}
  // puts together hours minutes and seconds in html

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

  //adds zero to time if less than 10

  function BK (color) {
    document.body.style.background = color;
  }