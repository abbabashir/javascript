var firstname = 'Bob';

var per = {
  firstname: 'john',
  lastname: 'smith',
  getFullname: function() {
    var that = this;
    console.log(this.firstname + ' ' + this.lastname);

    function greet() {
      console.log('Hi ' + that.firstname);
      //console.log('Hi ' + this.firstname);
    }
    greet();
  }
}

// borrowing from another object

var per1 = {
  firstname: 'Nick',
  lastname: 'Doe'
};

per1.getFullname = per.getFullname;

per.getFullname();
per1.getFullname();



/*
this

function a() {
console.log(this);
console.log(this === window);

function b() {
  console.log(this);
  console.log(this === window);
}

b();

}

a();

objects
var a ={
  name: 'john'
};
var b = a;

b.name = 'Nick';

b = {
  name: 'Bob'
};

primitives

var c = 2;
var e = c;
c = 4;

console.log(c);
console.log(e);


Hoisting

if (false) {
  var a = 10;
}else{
  var b = 20;
}

console.log(a);
console.log(b);

console.log(a);
console.log(b);

var a = 10;

var b = function () {
  return 15;
}

console.log(a);

scope chain
var num1 = 2;

console.log(num1);

function a() {
  var num2 = 10;

  function b() {
    var num3 = 3;

  }

  b();
}

a();

---------------------
function a() {
  a();
}

a();

Execution context
---------------
function a(){
  var name = 'john';
  b();
  console.log(name);
}

function b(){
  var name = 'bob';
  c();
  console.log(name);
}

function c(){
  var name = 'nick';
  console.log(name);
}

a();

------------------
var name = 'john';

function a(){
  return 'Hello';
}

var obj = {
  name: 'nick',
  b: function(){
    return 'Hi';
  }
}
*/
