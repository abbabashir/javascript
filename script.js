

/*

LOOPS

var date = new Date();

var year = date.getFullYear();

var month = date.getMonth();

var x = date.setFullYear(2020);
date.setMonth(5);

console.log(date);
console.log(year);
console.log(month);
console.log(x);


do while LOOPS
var cars = ['bmw', 'maserati', 'lamborgini', 'mercedes'];

var x = 0;

do {
  console.log(cars[x]);
  x++;

} while (x < cars.length);

while LOOPS

var x = 0;

while(x <= 10){
  console.log(x);
  x++;
}

for LOOPS
var arr = ['Abba', 'Bashir', 'junior', 'Fadila', 'Aisha'];

for(var i = 0; i < arr.length; i++){

  if (arr[i] === 'Fadila') {
    console.log(arr[i] + ' is my sister');
    continue;
  }
console.log(arr[i]);
}



 for loop
var arr = ['Abba', 'Bashir', 'junior', 'Fadila', 'Aisha'];

for(var i = 0; i < arr.length; i++){
  console.log(arr[i]);
}
console.log(arr);


OBJECTS

constructor method

var person1 = new Object();

person1.firstname = 'Abba';
person1.lastname = 'Bashir';

var person = new Object();
var job = 'profession';
var name = 'firstname';

person.name = 'Abba';
person.name = 'Bashir';
person['lastname'] = 'Bashir';
person[job] = 'Programer';

console.log(person);
console.log(person.firstname);
console.log(person.lastname);

literanotaion method

var person = new Object();

person.firstname = 'Abba';
person.lastname = 'Bashir';

person.son = new Object();
person.son.name = 'junior';
person.son.age = '8';

console.log(person);

var person = {
  firstname: 'Abba',
  lastname: 'Bashir',
  age: 18,
  sister:{
    name: 'Aisha',
    age: '14'
  },
  myFunc: function(par){
    console.log(par.sisterName + ' is the sister of '
    +par.brotherName + ' and she is '+
  par.sisterAge  + ' years old');
  }
};

console.log(person);
console.log(person.sister.name);

person.myFunc({sisterName: 'Fadila', brotherName: 'Bashir', sisterAge: 12});


ARRAYS
var colors = ['red', 'blue', 'yellow'];

colors[2] = 'green';

colors.push('orange');

colors.pop();

colors.shift();

colors.unshift('pink');


console.log(colors.indexOf('grey'));

if (colors.indexOf('grey') === -1) {
colors.push('grey');
console.log(colors);
}


Array constructor

var arr = new Array(1, 'Abba', false);

console.log(arr);

ARRAY literataion
var arr = ['Abba', 'Bashir', 'junior', 20, true, [1, 2, 3],
function(name){
  return 'Hello ' +name;
}
];

console.log(arr[6] (arr[1]));

function statement
function add(c, d){
  console.log(c + d);
}
add(10 , 15);

function expression
var sum = function(c,d){
  console.log(c + d);
}
sum(5, 10);

Basic function
function funName(){
  console.log('Hello Abba!');
}

funName();

function passExam(name,score){
  var passUni = 180;
  var passColl = 150;

  if(score >= passUni){
    console.log(name +' has enrolled in university with '+score+' points');
  }else if(score >= passColl){
    console.log(name +' Has enrolled in college with '+score+' points');
  }else{
    console.log(name +' Has failed');
  }

  }

  function totalScore(testScore, ExamScore){
    var score = testScore + ExamScore;
    return score;

}

passExam('Abba', totalScore(125, 128));
passExam('Bashir', 220);
passExam('junior', 180);
passExam('Nasir', 265);
passExam('sadiq', 110);


coding challenge answers

*/


/*
if(pass === 51 && john === 'john' && score >=51 && nick ==='nick' && scor <=51){
  console.log(' john Passed the exams with '+score+' marks');
}else{
  console.log('you both Passed');
}

if(pass === 51 && john === 'john' && score >=51){
  console.log('only john Passed the exams with '+score+' marks');
}else if(pass === 51 && nick ==='nick' && scor <=51){
  console.log(scor+' nick failed the exams');
}else{
  console.log('you both failed');
}

if(pass === 51 && john >= 90){
  console.log('only john Passed the exams');
}else if(pass === 51 && nick <=40){
  console.log('nick failed the exams');
}else{
  console.log('you both failed');
}

if(pass === 51 && john >= 51  && nick >= 51 ){
  console.log('only john Passed the exams');
}


if(!true){
  console.log("Condition is true");
}else{
  console.log('you just lied');
}

if(8 === 2 || 6 === 3){
  console.log("Condition is true");
}else{
  console.log('you just lied');
}

var job = 'student';

if (job === 'student') {

  console.log(job +' Learns programing');

}else if (job === 'Instructor') {

  console.log(job +' He teaches programing');

}else if (job === 'detective') {

console.log(job +' Fights crimes');

}else{
  console.log('You need to find a job');
}


var mychild = 'Abba ';
var gender = 'female';

if (gender === 'male') {
  console.log(mychild + 'is my son');
}else {
  console.log(mychild + 'is my daughter')
}*/

/*
var c = 10 + '5';

console.log(c);

var d = 'Hello ' + 'Dear ' + 'Instructor';
console.log(d);

var e = 5;
var f = '5'

var b = (10 * 15) + 5;

console.log(b);

var person = 'Student';
console.log(person);

person = 'Instructor'

console.log(person);

var firstname = Abba,
lastname = Bashir,
age = 18;

var str = 'Abba is a "student"';

console.log(str);

var num = 18;
console.log(num);

var num1 = 5;
var num2 = 10;
*/
