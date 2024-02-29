/* Since TS is a superset of JS, we can still write regular JS code in 
a TS file */
console.log('hello thieves')


// Our first TS Code
let age: number = 3;
console.log(age)

let firstName: string = 'christian'

let isAdmin: boolean = true

// ---------- TS Fundamentals ----------

// Built-in Types: variable: type = value



// ----- The "any" Type: Not best practice, you'll lose the benefit of static typing
let lastName: any = 'Sachs';
lastName = 3;



// ----- Arrays: Dynamic, you can pass any data type
let students: string[] = ['Sabita', 'Jay', 'Tez']


// Another huge benefit: Code completion


// ----- Tuples: Typed Array with a pre-defined length and types for each index
// NOTE: Its best practice to restrict your tuples to only 2 values
let dog: [number, string] = [1, 'pitbull']

// Code Completion
dog.push('dylan')
console.log(dog)



// ----- Enums: Special "Class" that represents a group of constants.
const small: number = 1
const medium: number = 2
const large: number = 3

// PascalCase "numeric"
enum Sizes {
    Small,
    Medium,
    Large
}
console.log(Sizes)

// "string"
enum Instructors {
    Lead = 'Christian',
    Associate = 'Dylan'
}
console.log(Instructors)



// ----- Functions: function "name"(parameter: type): return type {}
// Turn on "noUnusedParameters" & "noUnusedLocals" in config
function calculateTax(income: number): number {
    let bonus: number = 2000;
    return income * bonus
}

const calculateTax2 = (income: number): number => {
    let bonus: number = 2000;
    return income * bonus
}

console.log(calculateTax(8000000))


// ----- Objects
/* NOTES: 
Use "?" for optional properties 
Use readonly on properties you never want to reassign
*/

let employee: {
    readonly id: number,
    name: string,
    location: string,
    isAdmin: boolean,
    age?: number
} = {
    id: 0,
    name: 'dylan',
    location: 'ATL',
    isAdmin: false,
    age: 99
}

console.log(employee)