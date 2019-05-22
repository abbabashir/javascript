var students = [{
  name: 'John',
  score1: 47,
  score2: 46
},
{
    name: 'Bob',
    score1: 23,
    score2: 24
  },
  {
    name: 'Nick',
    score1: 40,
    score2: 35
  },
  {
    name: 'Alex',
    score1: 44,
    score2: 45
  },

];

var pass = [ 91, 81, 71, 61, 51];

var degrees = [ 'A', 'B', 'C', 'D', 'E'];

function calc (sco1, sco2){

  var add = sco1 + sco2;

 console.log(students);

 return add;

}

function calcFinal(){
  for (var i = 0; i < students.length; i++) {
    students[i].add = calc(students[i].score1,
    students[i].score2);

    if (students[i].add >= 51){
      console.log(students[i].name +
         ' passed final exams successfully');

         for (var x = 0; x < pass.length; x++){

           if(students[i].add >= pass[x]) {

             console.log('He has ' + students[i].add +
             ' points and he got diploma with degree ' + degrees[x]);
             console.log('----------------');
             break;
           }
         }
    }else{
      console.log(students[i].name+ ' got'
    + students[i].add + 'points, has failed and has to try next year');
    console.log('-----------------');
    }

  }

}
calcFinal();


/*
coding challenge one (1)

var john = 'john', score = 80;
var nick = 'nick', scor = 40;

var pass = 51;

if(score >= pass && scor >= pass ){
  console.log('Both Passed the exams');
}else if(score >= pass || scor >= pass){
  console.log('one of the students passed')
  if (score > scor) {
    console.log('John passed with '+score+' points')
  }else{
    console.log('Nick passed with '+scor+' points');
  }
}else{
  console.log('Both failed');
}*/
