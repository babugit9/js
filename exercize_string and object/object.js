// write a object and print it's property and values with dot and bracket notation

const user = {
   name: 'babu',
   age: 25,
   isStudent: true
}

console.log(user);
console.log(user.name);
console.log(user['age']);

// add, edit and delete a propery value in object

//add
user.class = 10;
user['roll']= 20;
console.log(user);

//edit
user.name = 'shepa',
user['age']= 43;
console.log(user);

//delet
delete user.name;
delete user['age'];
console.log(user);

//adding dynamic prooerty
let key = 'are you a-student?'
user[key] = "no";
console.log(user);

    console.log('=================------===============')

// adding a method in a object
const newuser = {
   name: 'babu',
   age: 26,
   year:'2022',
   hobby: function(){
      console.log('this is ' +this.year);
   }
}
console.log(newuser['hobby']);
newuser.hobby();

console.log('*****************');

// getting all property and value with for in loop;
for (key in newuser) {
   console.log(key, newuser[key]);
}

// getting object property and value like an array
console.log(Object.keys(newuser));
console.log(Object.values(newuser));

//after getting arry for a object we can access the array index and value separately

for (let akeys in Object.keys(newuser)) {
   console.log(akeys, Object.keys(newuser)[akeys] );
}

//total sellery

const selery = {
   babu: 12000,
   two: 13000,
   three: 14000,
   four: 15000,
   five: 16000,
}

let sum = 0;

//way one
for (let sel in selery) {
   sum += selery[sel];
}
console.log(sum);

//way two

let wtwo = Object.values(selery);
let tws = 0;
for(let ktwo of wtwo) {
   tws += ktwo
};
console.log(tws);

//object distracturing
const newObj = {
   name: 'babu',
   age : 23,
   address: {
      long: 234,
      lat: 343,
      name: 'para'
   },
   doing: function() {
      console.log("writng code");
   }

}

const {name, age, address} = newObj;
console.log(name);
console.log(age);
console.log(address);

const {long, name:tile, lat} = address;
console.log(long, tile, lat);

// clone an object

const doctor = {
   name: 'john',
   age: 25,   
}
console.log(doctor);

// object cloning with manual method
const one = {}
one.name = doctor.name;
one.age = doctor.age;
console.log(one);


console.log("-------------------")

//objece cloning with for in loop;
const exuser = {
   name: 'sumi',
   age: '20',
   profession: 'student'
}


const xxx = {};
for( key in exuser) {
   xxx[key] = exuser[key]
}
console.log(xxx);


//objece cloning with for in assign method;
let cxuser = Object.assign(exuser);
console.log(cxuser);

//objece cloning with for in split method;
let newxuser = {...exuser};
console.log({...exuser});

// math object
console.log(Math.PI);
console.log(Math.random() * 100);
console.log(Math.round(2.5));
console.log(Math.floor(2.9));
console.log(Math.ceil(2.2));
console.log(Math.max(1,2,2,4));
console.log(Math.min(1,2,2,4));


// object to json data convertion
const jes = {
   name:'smith',
   age: 57,
}

let contojeson = JSON.stringify(jes);
console.log(contojeson);

let retoobjet = JSON.parse(contojeson);
console.log(retoobjet);











