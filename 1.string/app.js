/* 
string method
   1.chartAt() ---> for getting index number of a string;
   2.chartCodeAt() ---> for getting a cherector's unicode number;
   3.uppercase() ---> to convert letter in capital letter;
   4.lowercase() ---> to convert letter in small letter;
   5.include('string', working index position) ---> to finding a substring for a string;
   6.startwith('string', working index position) ---> to finding a which word in a start of a string;
   6.endwith('string', working index position) ---> to finding a which word in the end of a string;
   7.toString() ---> for changing any data type into string. you can also convert array and object by this method;
   8.concat() ---> for marging more string;
   9.split() ---> you can devided a string with split method and they will give you an array;
   10.slice() ---> you can slice a string in this method;
   11.substring() ---> you can slice a string in this method by stating index and ending index. you can't use negative value here;
   12.substr() ---> it's like substring. but it will take starting index number and lenght;

*/

let line = "I love bangladesh";
let arr = [1,2,3];
let m1 = 'hi';
let m2 = ' hello';
let m3 = ' bye';
let m = m1.concat(m2, m3);
console.log(m);
console.log(line);
console.log(line[0]);
console.log(line.charAt(3));
console.log(line.charCodeAt(5));
console.log(line.toUpperCase());
console.log(line.toLowerCase());
console.log(line.includes('love', 1));
console.log(line.startsWith('love',2));
console.log(line.endsWith('love', 6));
console.log(arr);
console.log(arr.toString());
console.log(line.split(' ') , 2);
console.log(line.slice(0, 10));
console.log(line.substring(2, 6));
console.log(line.substr(0, 10));


//hard string
let stroy = '\the said "it\'s a sunny day" \n \tHello world';
console.log(stroy);









