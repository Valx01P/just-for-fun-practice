let bro = 53
// console.log(bro)

let array = [1, 2, 3, 4, 5]

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i])
// }

let double = (x) => {
    return x * 2
}

// console.log(double(5))

let doubleArray = array.map(double)
// console.log(doubleArray)

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))

while (bro < 100) {
    bro++
    // console.log(bro)
}

// using sets
let set = new Set()
set.add(1)
set.add(2)
set.add(3)

// set uses
// console.log(set.has(1))
// console.log(set.size)
// console.log(set.delete(2))
// console.log(set.size)
// console.log(set.clear())


// using maps
let map = new Map()
map.set('name', 'John')
map.set('age', 23)
// console.log(map.get('name'))
// console.log(map.size)
// console.log(map.delete('name'))


// classes
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

let person = new Person('John', 23)
// person.greet()

// using async await
async function fetchData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await response.json()
    console.log(data)
}

fetchData()

// using promises
function fetchDataPromise() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}


// array destructuring
let [a, b, c] = [1, 2, 3]
// console.log(a, b, c)
// array destructuring with rest
let [d, ...e] = [1, 2, 3, 4, 5]

// array functions
let f = [1, 2, 3, 4, 5]
// console.log(f.map(x => x * 2))
// console.log(f.filter(x => x > 2))
// console.log(f.reduce((acc, x) => acc + x))


// object destructuring
let obj = {name: 'John', age: 23}
let {name, age} = obj
// console.log(name, age)



// objects
let personObj = {
    name: 'John',
    age: 23,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

// ternary operator
let g = 5
let h = g > 5 ? 'greater than 5' : 'less than or equal to 5'