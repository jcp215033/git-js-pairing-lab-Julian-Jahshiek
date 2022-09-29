//1 Julian-driver
function fiveToOneHundred(){
    for (let i = 5; i<=100; i++){
        console.log(i);
    }
    
}
fiveToOneHundred();
//2jahshiek-driver
function multiplesOfThree(x){
  for (let x = 1; x <= 100; x++){
    if (x%3 === 0)
      console.log(x)
  }
    
}
multiplesOfThree();

//3 Julian the driver

function multiplesOfThreeOrFive (){
for (let x = 0; x<=100; x++){
    if ((x % 3 === 0) || (x % 5 === 0)){
        console.log(x);
    }
}

}

multiplesOfThreeOrFive();

//4 jahshiek driver
function untilNum(bum) {
  if (bum < 1) {
        console.error('num must be greater than 1');
        return;
    }

    if (!Number.isInteger(bum)) {
        bum = Math.trunc(bum);
    }

    for (var i = 1; i <= bum; i++) {
        console.info(i);
    }
}

untilNum(10);

//5 Julian Driver
 function multiply(x,y){
     let z = 0;
     z = x*y;
     return z;
 }
 console.log(multiply(3, 5));


//6 Jahshiek-Driver
function add(num1, num2){
  if(num1 === num2){
    return(num1 + num2)*3
  }
  if (num1 != num2)
    return num1 + num2
}
console.log(add(14, 14));




function isNegative (x){
  if (x < 0){
    return true;
  }
  else {
    return false;
  }
}

console.log(isNegative(-7));

//8 Jahshiek-Driver
function triangleArea(b, h){
  return (b*h)/2
}
console.log(triangleArea(5, 7))

//9 julian driver

function betweenTwentyAndFourty (x) {
  if (x > 20 &&  x < 40){
    return true;
  }
  else {
    return false;
  }
}
console.log(betweenTwentyAndFourty(55));

//10 Jahshiek-Driver
function largest(num1, num2, num3){
  if(num1 > num2 && num1 > num3){
      return num1
  }else if (num2 > num1 && num2 > num3){
      return num2
  }else if(num3 > num1 && num3 > num2){
      return num3
  }else{
      return "They are all equal"
  }
}
console.log(largest(14, 44, 51))

// 11 Julian Driver

function printTime (){
  const d = new Date();
let time = d.getHours() + ':' +d.getMinutes() + ":" + d.getSeconds();
return time;
}

console.log(printTime());

//12 Jahshiek-Driver
function isLeapYear(year){
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(isLeapYear(2016));
