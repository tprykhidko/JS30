const dogs = [
  { name: "Sniekers", age: 2 },
  { name: "Hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

console.log("%c some text", "font-size: 24px");

// Warning!
console.warn("OH nooooo");

// Error!
console.error("Some error");

// Info
console.info("The Chupa Chups logo was designed by Salvador Dalí");

// Testing
const p = document.querySelector("p");
console.assert(p.classList.contains("some-class"), "That is wrong");

// Clear
console.clear();

//Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});

// Counting
console.count("East");
console.count("East");
console.count("East");
console.count("West");
console.count("West");
console.count("East");
console.count("East");
console.count("West");

//Timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

console.table(dogs);
