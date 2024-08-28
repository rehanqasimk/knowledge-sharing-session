# Hands-On

## Table of Contents

- [Simple Project Setup](#simple-project-setup)
- [ts-config](#tsconfigjson)
- [ECMAScript Versions](#ecmascript-versions)
- [Interfaces and Type Aliases](#intefaces-and-type-aliases)


## Simple Project Setup

```plaintext
my-typescript-project/
│
├── dist/                  # Compiled JavaScript files go here
│   └── (compiled .js files)
│
├── src/                   # Source code directory
│   └── index.ts           # Main TypeScript entry file
│
├── package.json           # Node.js project metadata and dependencies
│
└── tsconfig.json          # TypeScript compiler configuration
```


# tsconfig.json

```json
{
  "compilerOptions": {
    "outDir": "dist", // where to put the TS files
    "target": "ES2022", // JS language level (as a build target)
    "moduleResolution": "Node" // Find cjs modules in node_modules
  },
  "include": ["src"] // which files to compile
}

```

# ECMAScript Versions
Here's a summary of the major ECMAScript versions and their key features:

| ECMAScript Version | Release Year | Major Introductions                                     |
|--------------------|--------------|---------------------------------------------------------|
| **ES3**            | 1999         | Regular expressions, try/catch for error handling, `for...in` loop, `Array` methods (`forEach`, `map`, `filter`, `reduce`), and `Date` object improvements |
| **ES4**            | Proposed, but not standardized | Major changes proposed but not adopted, including classes, modules, and more comprehensive type annotations. The standard was abandoned. |
| **ES5**            | 2009         | Strict mode, JSON support (`JSON.parse`, `JSON.stringify`), `Object` methods (`Object.create`, `Object.defineProperty`), `Array` methods (`forEach`, `map`, `filter`, `reduce`), and getter/setter functions |
| **ES6 (ES2015)**   | 2015         | Arrow functions, classes, template literals, destructuring, default parameters, `let` and `const`, `Promise`, `Map` and `Set`, `Symbol`, and modules (import/export) |
| **ES7 (ES2016)**   | 2016         | Exponentiation operator (`**`), `Array.prototype.includes` |
| **ES8 (ES2017)**   | 2017         | `async`/`await`, `Object.entries`, `Object.values`, `String.prototype.padStart`, `String.prototype.padEnd`, `SharedArrayBuffer`, `Atomics` |
| **ES9 (ES2018)**   | 2018         | Asynchronous iteration (`for await...of`), `Object.prototype.toString` improvements, rest/spread properties in objects |
| **ES10 (ES2019)**  | 2019         | `Array.prototype.flat`, `Array.prototype.flatMap`, `Object.fromEntries`, `String.prototype.trimStart`, `String.prototype.trimEnd`, `Symbol.prototype.description` |
| **ES11 (ES2020)**  | 2020         | `Optional chaining` (`?.`), `Nullish coalescing operator` (`??`), `BigInt`, `Dynamic import`, `String.prototype.matchAll`, `Promise.allSettled`, `globalThis` |
| **ES12 (ES2021)**  | 2021         | `Logical assignment operators` (`&&=`, `||=`, `??=`), `WeakRef`, `FinalizationRegistry`, `String.prototype.replaceAll`, `Numeric separators` (e.g., `1_000_000`) |
| **ES13 (ES2022)**  | 2022         | `Class Fields`, `Top-level await`, `WeakRefs`, `Error cause`, `Array.prototype.at`, `Object.hasOwn` |

Each version of ECMAScript introduces new features and improvements that help enhance the JavaScript language and improve developer experience. These features are progressively adopted into JavaScript engines and are supported in modern browsers and Node.js environments.







# Intefaces and Type Aliases
## type
```ts
let amount : {
  currency: string
  value: number
}
```

> giving types an alias using `type` keyword

```ts

type Amount = {
  currency: string
  value: number
}
```


```ts
function printAmount(amt: Amount) {
  console.log(amt)           
  const { currency, value } = amt
  console.log(`${currency} ${value}`)
}
```


```ts

// @filename: utilities.ts
import { Amount } from "./types"

```
## interface

An interface is a way of defining an object type. In this context think of an object type is anything that looks like this.


<img src="/image-1.png" alt="alt text" width="200"/>



 > interface
```ts

interface User {
    name: string;
    age: number;
    email: string;
}

```

> usage

```ts 
// Using the User interface to create an object
const user: User = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};

console.log(user);
```




One important distinction between the two:

You cannot have mutiple declarations of `type` aliases in the same scope.

<img src="/image.png" alt="alt text" width="500"/>

TypeScript interfaces are “open”, meaning that unlike in type aliases, you can have multiple declarations in the same scope:




```ts

// First declaration of the interface
interface User {
    name: string;
    age: number;
}

// Extending the same interface by declaring it again
interface User {
    email: string;
}

// Further extending the same interface
interface User {
    isAdmin: boolean;
}

// Now the `User` interface has all four properties
const user: User = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
    isAdmin: true,
};

console.log(user);


```