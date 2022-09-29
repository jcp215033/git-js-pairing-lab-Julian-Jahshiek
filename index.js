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