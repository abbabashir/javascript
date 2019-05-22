function digitalClock(){

var date = new Date();

var hours = date.getHours() + '';

var minutes = date.getMinutes() + '';

var seconds = date.getSeconds() + '' ;

var day = date.getDay();

var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

var clock = weekDays[day] + ' ' + hours + ':' + minutes + ':' + seconds;


document.getElementById('clockpop').innerHTML = clock;


if (hours.length < 2) {
  hours = '0' + hours;
}


if (minutes.length < 2 ) {
  minutes = '0' + minutes;

}

if (seconds.length < 2) {
  seconds = '0' + seconds;
}


}

digitalClock();

setInterval(digitalClock, 1000);


function min () {

  var date = new Date();

  var hours = date.getHours() + '';

  var minutes = date.getMinutes() + '';

  var seconds = date.getSeconds() + '' ;

  var day = date.getDay();

  var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  var clock = weekDays[day] + ' ' + hours + ':' + minutes + ':' + seconds;


  document.getElementById('clockpop').innerHTML = clock;

if (minutes.length < 2 ) {
  minutes = '0' + minutes;

}else if (document.getElementById('clockpop') != clock || weekDays <= 'Thu 20:48:50'){
alert(clock + ' its time ' + weekDays[4] +' For prayer');
}
}

min();

setTimeout(min, 9000);
setTimeout(min, 15000);
