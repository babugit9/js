const doctor = {
   name: 'john',
   age: 25,
   clinic : {
      name: 'helth care hospital' ,
      address : {
         lon: 25.95,
         lat: 28.36,
      },
   },

   doing: function() {
      console.log(`he is ${this.age} years old`);
   }
}

// console.log(doctor);
// console.log(doctor.name);
// console.log(doctor.age);
// console.log(doctor.clinic);
// console.log(doctor.clinic.name);
// console.log(doctor.clinic.address);
// console.log(doctor.clinic.address.lon);
// console.log(doctor.clinic.address.lat);

//traversing the object 
for(let key in doctor) {
   console.log(key, doctor[key]);
}

console.log('------------------------------------------------')

/* cappy a object */
const user = {
   name: 'babu',
   age: 28,
}

/*
//menual method
const cuser = {};
cuser.name = user.name;
cuser.age = user.age;
console.log(cuser);
*/

/*
//for in loop method
const cuser = {};
for(key in user) {
   cuser[key] = user[key];
}
console.log(cuser);
*/

/*
//object assign method
const cuser = Object.assign(user);
console.log(cuser);
*/


//split method
const cuser = {...user};
console.log(cuser);
