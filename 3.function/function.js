//simple function
function print(name, age) {
   console.log(`my name is ${name} and i am ${age} years old`);
}
print('babu', 58);


//return function 
function ret(number1, number2) {
   let sum = number1+ number2;
   return sum;
}
let resutl = ret(10, 20);
console.log(resutl);

// defult parameter
function deft (num3, num1 = 10, num2 = 20) {
   let sum = num1 + num2 + num3;
   return sum;
}
console.log(deft(30));

// hoisting and function experssion
console.log(cacx(25, 35));
function cacx(num1, num2) {
   let sum = num1 + num2;
   return sum;
}

// function experssion
const expfun = function(value1, value2) {
   let x = value1 + value2;
   return x;
}

console.log(expfun(2, 5));

//function experssion short 
const short = function(num1) { 
   return num1 * 10;
}
console.log(short(25));

// arrow function
const arr = (num1, num2) => {
   return num1*num2;
}
console.log(arr(10, 20));

// rest para meter;
let rest = (...args) => {
   let sum = 1;
   for(k of args) {
      sum *= k;
   }

   return sum;
}

console.log(rest(10,20,30,40,50,60,70));

/* 
   calculate area of a circel
   formula = PI*r*r
*/

// noraml funciton
function area(radious) {
   return Math.PI * radious *radious;
}
console.log(area(2));
console.log(Math.round(area(2)));

// function experssion
const areac = function(r) {
   return Math.PI * r *r;
}
console.log(areac(2));
console.log(Math.round(areac(2)));

// arrow function
const aofc = (r) => {
   return Math.PI * r * r;
}
console.log(aofc(2));
console.log(Math.round(aofc(2)));

/*
   problem-two
   finding max number from the argument with a 3 types of  funciton

*/

// simple funciton and super simple way
function max(one, two, three, four) {
   return Math.max(one, two, three, four);
}
console.log(max(1,2,3,4));

// simple funciton and infinte value
function myFunct(...x) {
   let one = 0;
   for(let ax of x) {
      if(ax > one) {
         one = ax;
      }
   }
   return one;
}
console.log(myFunct(20,10,25,36,80));

// calculate big value with function expression
const funexp = function(...y) {
   let max = 0;
   for(let i = 0; i<y.length; i++) {
      max = y[i];
   }
   return max;   
}
console.log(funexp(20,30,40,50,60));

// cauculate big value with arrow funciton
const xta = (...z) => {
   let pyu = 0
   for(let p of z) {
      pyu = p;
   }

   return pyu;

}
console.log(xta(1,2,3,4,5,6));








