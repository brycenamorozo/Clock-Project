function startTime() {

  var ampm = "pm"

  var time = new Date();
  
  var h = time.getHours();
 
  var m = time.getMinutes();
  
  var s = time.getSeconds();
 
  m = checkTime(m);
  s = checkTime(s);

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

  document.getElementById('time').innerHTML =
  h + ":" + m + ":" + s + " " + ampm;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}
