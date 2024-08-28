
//? Things at Play when you in the Editor:
//? TypeScript Compiler
//? TS Language Server (especial advantage if you are VS Code)
//? Some other if incorporated (like typescript-eslint )


//? In TypeScript, variables are “born” with their types.


//* Variable Declarations & Inference
let temperature = 6 //! inference



temperature = "warm"  //! type-checking
let humidity: 79 = 79  //! literal type

//* A type as a set of allowed values

temperature = 23 //✔️ (1)  - re-assignability of a let
temperature = humidity; //! (2) - type-checking
humidity = temperature; //! (3) - number is not of type `79`
humidity = 79; //✔️ (4) - 79 is of type `79`
humidity = 78; //! (5) - 78 is not of type `79`


//* Implicit `any` and type annotations

// between 500 and 1000
export const RANDOM_WAIT_TIME =
    Math.round(Math.random() * 500) + 500

let startTime = new Date()
let endTime

setTimeout(() => {
    endTime = 0
    endTime = new Date()
}, RANDOM_WAIT_TIME)


//* Type Casting

let somedate = new Date("Jan 1, 2012")
let date1 = somedate
let date2 = somedate as any;


// const humid3 = 79 as number; //✔️ is 79 a number? If so, this is safe!



//! Function arguments and return values


function add(a, b) {
  return a + b // strings? numbers? a mix?
}

const result = add(3, "4")
const p = new Promise(result);

/**/

export default {}