//* Union types in TypeScript

const humidity = 79 //? Recall literal types

//? Create types for two sets of numbers

//? A set of numbers from 1 to 5
type OneThroughFive = 1 | 2 | 3 | 4 | 5
let lowNumber: OneThroughFive = 3 //✔️ Valid
lowNumber = 8 //! 8 is not in the set

//? A set of even numbers from 1 to 9
type Evens = 2 | 4 | 6 | 8
let evenNumber: Evens = 2 //✔️ Valid
evenNumber = 5; //! 5 is not in the set


// //? A set of numbers from 1 to 5 OR a set of even numbers from 1 to 9
let evenOrLowNumber: Evens | OneThroughFive = 7;


//* Intersection Types
/*
// //? What does Evens & OneThroughFive accept as values?
// let evenAndLowNumber: Evens & OneThroughFive;
// evenAndLowNumber = 6 //! Not in OneThroughFive
// evenAndLowNumber = 3 //! Not in Evens
// evenAndLowNumber = 4 //✔️ In both sets

/**/

export default {}