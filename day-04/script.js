function lifetime(born, passed) {
  console.log(born);
  console.log(passed);
  console.log(passed - born);

  return passed - born;
}

const inventors = [
  {
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955,
    live: lifetime(this.year, this.passed),
  },
  {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727,
    live: lifetime(this.year, this.passed),
  },
  {
    first: "Galileo",
    last: "Galilei",
    year: 1564,
    passed: 1642,
    live: lifetime(this.year, this.passed),
  },
  {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934,
    live: lifetime(this.year, this.passed),
  },
  {
    first: "Johannes",
    last: "Kepler",
    year: 1571,
    passed: 1630,
    live: lifetime(this.year, this.passed),
  },
  {
    first: "Nicolaus",
    last: "Copernicus",
    year: 1473,
    passed: 1543,
    live: lifetime(this.year, this.passed),
  },
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];

const livetime = inventors.map((inventor) => inventor.live);
//const liveArr = inventors.map((inventor) => inventor.live());
console.table(livetime);

// Array.prototype.filter()
const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.table(fifteen);

// Array.prototype.map()
const fullNames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
console.table(fullNames);

// Array.prototype.sort()
const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(ordered);

// Array.prototype.reduce()
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

// Sort the inventors by years lived
const oldest = inventors.sort(function (a, b) {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? 1 : -1;
});
console.table(oldest);

let test = {
  a: 10,
  b: 20,
  sum: function () {
    return this.a + this.b;
  },
};

console.log(test);
console.log(test.sum());
