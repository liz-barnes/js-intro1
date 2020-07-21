// console.log("functions")

const nuggetizer = (animal) => {
  return `processed ${animal}`;
}

console.log(nuggetizer('pig'));
console.log(nuggetizer('fish'));
console.log(nuggetizer('chicken'));
console.log(nuggetizer('student'))


const addItUp = (number) => {
  return number + 42
}

console.log(addItUp(1))

// const age = (year) => {
//   return 2099 - year
// }

// console.log(age(1995));

// const age = (year) => 2099 - year 

// console.log(age(1995));

const age = (year) => `In 2099, I will be ${2099 - year} years old!`

console.log(age(1995));
