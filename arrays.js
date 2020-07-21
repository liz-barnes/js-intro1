// console.log("Arrays!")


// // SPLIT
// const bestFriend = "Kels"
// const bestFriendArray = bestFriend.split("");
// console.log("My best friend is array format", bestFriendArray)

// const bestie = "K-el-s"
// const bestieArray = bestie.split("-");
// console.log("My best friend is array format", bestieArray)

// const besties = "Kels, Krim, Dre"
// const bestiesArray = besties.split(",");
// console.log("My best friend is array format", bestiesArray)


// // JOIN
// // const array2 = ["cow", "dog", "cat"];
// // const string = array2.join(",")
// // console.log(string)

// // const array3 = ["cow", "dog", "cat"];
// // const string2 = array3.join(",")
// // console.log(string2.split(","))

// // Pop
// const animals = ["cow", "dog", "cat"];
// // const lastAnimal = animals.pop();
// // console.log("animals", animals)
// // console.log("last animal", lastAnimal)

// // const first = animals.shift()
// // console.log(first)
// // console.log("animals", animals)

// animals.unshift("lizard");
// console.log(animals)

// animals.push("cheetah");
// console.log(animals)

// const arrayIndex = (array, index) => {
//   return array[index];
// }

// console.log(arrayIndex(animals, 1));
// console.log(arrayIndex([1,2,3,4,5,6,7,8], 5))

// Wrie a function that takes an array of something and tells you if the name 'Greg is in that array
const names = ["Greg", "Charli", "Izzie", "Sam", "Evan"]

// const whereIsGreg = (array) => {
//   return array.includes("Greg")

// };

const whereIsGreg = (array) => {
  if (array.includes("Greg"))
  return true
};

console.log(whereIsGreg(names));
// console.log(whereIsGreg(["Greg", "Charli"]));

const findGreg = (arr) => {
  return arr.indexOf("Greg") >= 0 ? true : false;
} // 
// // if (arr.indexOf("Greg") >= 0 ) {
//   return true
// } else {
//   return true
// }

console.log(findGreg(["Greg", 'a', 'b']));

// const plusForty2 = (number = 0) => {
//   return 42 + number
// }

// console.log(plusForty2())

// const plusForty2 = (number) => {
//   return 42 + (number || 0)
// }

// console.log(plusForty2())
