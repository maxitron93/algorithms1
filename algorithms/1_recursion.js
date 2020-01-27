// Recursove function example
let counter = 1
function inception() {
    if (counter > 3) { // Base case
        return 'Done!'
    } else {
        console.log(`Counter: ${counter}`)
        counter++
        return inception() // Recursive function
    }
}

console.log(inception())

// Find the factorial of a given number. For example, the factorial for 5 is 5!; 5 * 4 * 3 * 2 * 1
// Recursive nature:
// recFac(1) = 1
// recFac(2) = 2 * recFac(1)
// recFac(3) = 3 * recFac(2)
// recFac(4) = 4 * recFac(3)
// recFac(5) = 4 * recFac(4)

// 2! = 2 * 1 -- > This is the base case

// Recursive approach (function calls itself):
// Time complexity is O(n)
let recursiveFactorial = (num) => {
    if (num <= 1) { // Base case
        return num
    } else { // Recursive case
        nextNum = num - 1
        return num * recursiveFactorial(nextNum)
    }
}

console.log(recursiveFactorial(5))

// Now create an itterative version (with loops):
// Time complexity is O(n) because of the loop
let itterativeFactorial = (num) => {
    result = num
    while (num > 1) {
        num = num - 1
        result = result * num
    }
    return result
}

console.log(itterativeFactorial(5))

// Find the Index value of a Fibonacci sequence, given a number N
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// Recursive nature:
// recFib(0) = 0
// recFib(1) = 1
// recFib(2) = recFib(0) + recFib(1)
// recFib(3) = recFib(2) + recFib(1)
// recFib(4) = recFib(3) + recFib(2)
// recFib(5) = recFib(4) + recFib(3)

// Recursive approach (function calls itself):
// O(2^n) complexity (the number of calculations grows like a tree) - see the diagram in the README file
const recursiveFibonacci = (index) => {
    if (index < 2) {
        return index
    } else {
        return recursiveFibonacci(index - 1) + recursiveFibonacci(index - 2)
    }
}

console.log(recursiveFibonacci(10))

// Itterative approach(using a loop):
// O(n) complexity (one loop)
const itterativeFibonacci = (index) => {
    if (index < 2) {
        return index
    } else {
        let index_less_two = 0
        let index_less_one = 1
        let indexValue = index_less_two + index_less_one
        while (index > 2) {
            index_less_two = index_less_one
            index_less_one = indexValue
            indexValue = index_less_two + index_less_one
            index--
        }
        return indexValue
    }
}

console.log(itterativeFibonacci(10))
