// testing
console.log('testing')

// Type Aliases: Creating our own Type
type Programmer = {
    name: string,
    skills: string[]
}

const dylan: Programmer = {
    name: 'dylan',
    skills: ['python', 'github', 'flask']
}

// Union Types: Can allow a variable to be one of many types (number | string)
function kgToLbs(weight: (number | string)): number{
    if (typeof weight === 'number'){
        return weight * 2.2
    }
    return Number(weight) * 2.2
}

console.log(kgToLbs(90))


type ValidParams = (number | string)
// TypeScript Arrow Function
const lbsToKgs = (weight: ValidParams): number => {
    if (typeof weight === 'number'){
        return weight / 2.2
    }
    return Number(weight) / 2.2
}

console.log(lbsToKgs(198))



// Literal Types (exact)
type Quantities = (25 | 50 | 75 | 100)

let quantity: Quantities = 50



// Nullish Coalescing Operator (??): We can fallback to a default value when dealing with null/undefined objects
const michael = null;
const sarah = 'Sarah';
const mary = '';

console.log(michael ?? 'unknown michael')
console.log(sarah ?? 'unknown sarah')
console.log(mary ?? 'unknown mary')


// Type Assertions: specify a different type than the one inferred by the compiler.
// NOTE: There isn't any type conversion happening under the hood.
// const inputEl = document.getElementById('input') as HTMLInputElement
// const formData = inputEl.value

// Creating Classes
class Cohort {
    constructor(
        public readonly id: number, 
        private _name: string, 
        public num: number
    ){}

    printInfo = ():string => {
        return `${this._name}-${this.num}`
    }

    printPrivate = (): string => {
        return this._name
    }
}

const thieves = new Cohort(0, 'thieves', 139)
console.log(thieves.printInfo())
// private properties and accessing them
console.log(thieves.printPrivate())

// typeof vs instanceof
// console.log(typeof thieves === Cohort)
console.log(thieves instanceof Cohort)



// Interfaces vs Types
/* They both establish a shape of an object and can be used interchangeably BUT 
Its more conventional to implement Interfaces with Classes AND
Interfaces can also inherit from other Interfaces & Types, while Types cannot.
*/
// interface MUST be an object

interface Player {
    playerName: string
    playerNumber?: number
}

class Team implements Player {
    constructor(
        private city: string, 
        public readonly teamName: string, 
        public playerName: string, 
        public playerNumber?: number
    ){}

    printInfo = (): string => `${this.playerName} plays for the ${this.city} ${this.teamName}.`
}

const lakers = new Team('Los Angeles', 'Lakers', 'Kobe Bryant')
console.log(lakers.printInfo())