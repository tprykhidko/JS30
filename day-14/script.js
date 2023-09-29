// strings and numbers are immutable, we can reassign variables to newer strings/numbers, but we can't manipulate values itself.
let age = 100;
let age2 = age;
console.log(age, age2); //100, 100
age = 200;
console.log(age, age2); //200, 100

let userName = "Wes";
let userName2 = userName;
console.log(userName, userName2); //wes, wes
userName = "wesley";
console.log(userName, userName2); //wesley, wes

// reference
const players = ["Wes", "Sarah", "Ryan", "Poppy"];
// const team = players;
// team[3] = "Lux";
// console.log(players, "reference", team);

// slice copies all the elements to the new array
const team2 = players.slice();
team2[3] = "Lux";
console.log(players, "copy with slice()", team2);

// concat also creates a new array
const team3 = [].concat(players);
team3[3] = "Chris";
console.log(players, "copy with concat()", team3);

// or use the new ES6 Spread for 1 level deep
const team4 = [...players];
team4[3] = "John";
console.log(players, "copy with spread", team4);

// array from is another verstile way of copying,
//  you can add extra stuff like a map func or a 'this' to be used
const team5 = Array.from(players);
team5[3] = "Jersey";
console.log(players, "copy with spread", team5);

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// make copy with Object.assign() for 1 level deep
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);

const wes = {
  name: "Wes",
  age: 100,
  social: {
    twitter: "@wesbos",
    facebook: "wesbos.developer",
  },
};

const dev = Object.assign({}, wes);
dev.age = 1;
dev.social.twitter = "@yolo";
console.log(wes);
// Object has changed, twitter handle is now @yolo

const dev2 = JSON.parse(JSON.stringify(wes));
dev2.social.twitter = "@yolo2";
console.log(wes);
// Output hasn't changed, twitter handle is not @yolo2
