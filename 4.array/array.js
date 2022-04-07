//wirte an array
const friends = ['F1', 'F2', 'F3'];
console.log(friends);

//print one array element form the array
console.log(friends[0]);

// print array lenght
console.log(friends.length);

/* 
   inserting element in the array
   unshift- you can add element in the first of array
   splice - you can add element by the indexing number of an array
   push - you can add element in the last of array

*/

//adding element in first of the Array
const adding = [1,2,6,7,8,9,10];
adding.unshift(-1, 0);
console.log(adding);

//adding element in middle of the array
adding.splice(4, 0, 3,4,5);
console.log(adding);

//adding element in the last of the array
adding.push(11, 12,13);
console.log(adding);


/* 
   removing element in the array
   shift- you can add element in the first of array
   splice - you can add element by the indexing number of an array
   pop - you can add element in the last of array

*/

// remove element for the firs of the array
const rarry = [10, 20, 30, 40, 50] 
rarry.shift();
console.log(rarry);

// remove element from the middle of the array
rarry.splice(0, 2);
console.log(rarry);

// remove element for the last of the array
rarry.pop();
console.log(rarry);

/* 
   finding an element form the array
   includes ===> search an element form the array and you will get bolliean value
   indexof ===> search an element from the array and you will get index number
   lastindexof ===> if the search result will be multipul the you will get last index number
*/

const finding = [1,3,5,7,8,20,25,5];
console.log(finding.includes(5));
console.log(finding.indexOf(5));
console.log(finding.lastIndexOf(5));

// finding object in array with simple funciton
const jonarry = [
   {
      name: 'jhon',
      age: 25
   },

   {
      name: 'mary',
      age: 26
   },

   {
      name: 'smith',
      age: 27
   }
]

// find
const babu = jonarry.find((doctor) => {
   return doctor.name === 'smith';
})
console.log(babu);

// findIndexof
const shepa = jonarry.findIndex((teacher) => {
   return teacher.name === 'smith';
});
console.log(shepa);

// array taversing with 3 loops
const lopp = [1,2,3,4,5];

//for loop
for(let i = 0; i < lopp.length; i++) {
   console.log(lopp[i]);
}

//for of loop
for(let j of lopp) {
   console.log(j);
}

// for eatch loop
lopp.forEach(function(x,y){
   console.log(x,y);
});

// arrow function
lopp.forEach((x,y) => {
   console.log(x, y);
})










