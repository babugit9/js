let str = 'I love javascript very much';
console.log(str);
console.log(str[4]);
console.log(str.charAt(10));
console.log(str.charCodeAt(2));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.startsWith('love' , 2));
console.log(str.endsWith('love' , 6));
console.log(str.includes('javascript',9));
console.log(str.split(' ' ,4));

//generating sub string
console.log(str.slice(0, 4));
console.log(str.substring(0,4));
console.log(str.substr(0,3));

// tosting method can change any data type to string
const userFriend = ['babu', 'shohan', 'rifat'];
console.log(userFriend.toString());
console.log(typeof userFriend.toString());

// warite a hard string
const hard = '\t he said to me "it\'s a ranny day" \nHello world';
console.log(hard);

