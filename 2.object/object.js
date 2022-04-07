const user = {
   name: 'babu',
   age: 26,
   hoby: 'coding'
}

console.log(user);

//adding new property
user.firstName = 'Mahmudul';
user['lastName'] = 'Msb';
console.log(user);

//update old property's value
user.name = 'shepa';
user['age']= 15;
console.log(user);

// delete property in object
delete user.firstName;
delete user['lastName'];
console.log(user);

// adding dynamic property and value
let dynamic = 'Are you a student';
user[dynamic] = 'yes bro';
console.log(user);

// object method and this keyword
let age = 256;
const person = {
   name: 'babu',
   age: 25,
   isStudent: true,
   friends: ['babu', 'shepa', 'mahmudul'],
   calculateAge: function () {
      console.log(`I am ${this.age} years old`);
   }
}
person.calculateAge();

// getting object property and values
const obj = {
   name: 'obj',
   age: 25,
   fname: 'badsha',
   mname: 'mursheda'
}

// getting objet's property and values with for in loop
for(let key in obj) {
   console.log(key, obj[key]);
}

// getting object's proerty like an arry with keys and values
console.log(Object.keys(obj));
console.log(Object.values(obj));

// after doing keys and values process we are getting a array. now we will access all arrar's element and indexing number with for off loop and for in loop

// getting array's element name
for(let arrele of (Object.keys(obj))) {
   console.log(arrele);
}

for (let indexNumber in Object.values(obj)) {
   console.log(indexNumber);
}


// total selery in object 
const selery = {
   babu: 12000,
   two: 13000,
   three: 14000,
   four: 15000,
   five: 16000,
}

let math = 0;

// way one
let xsum = 0;
for( let key in selery) {
  xsum += selery[key];
}
console.log(xsum);

// way two
let mathtow = 0;
let obvalue = Object.values(selery);
for (let objx of obvalue) {
   mathtow += objx;
}
console.log('last' + mathtow);


// object distacuring
const disobj = {
   name: 'babu',
   aged: 25,
   mname: 'Mursheda',
   fabook: {
      name: 'ict',
      author: 'mahabub'
   }
}

const {name, aged, mname} = disobj;
console.log(name);
console.log(aged);
console.log(mname);














