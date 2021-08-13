let myName="Angeswari";
console.log(myName[0]);
console.log(myName.charAt(4));
console.log(myName.length);
console.log(myName.length-1);
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(myName.startsWith("A"));
console.log(myName.endsWith("i"));
console.log(myName.includes("ganesan"));

//to look for a substring within a string.
let str = 'I love to Coding';
console.log( str.indexOf('I') ); // 0, 
console.log( str.indexOf('Love') ); // -1, not found, the search is case-sensitive
console.log( str.indexOf("coding") ); // 1, 

//to get substring.
let place="yercaurd";
console.log(place.slice(0,3));// return & slice the desire part from string
console.log(place.slice(3));

//string comparision.
console.log('a'>'A');//small caps are greater than caps,
console.log( "z".codePointAt(0) ); // 122,returns the char at position in alphabet.
console.log( "Z".codePointAt(0) ); // 90
