// Memoization example
// Addition function without caching
const add80 = (num) => {
    let result = num + 80
    console.log(`New calculation: ${result}`)
    return result
}

add80(20)
add80(20)

// Addition function with memoization
let cache = {}

const memoizedAdd80 = (num) => {
    if (cache[num]) {
        console.log(`Return from cache: ${cache[num]}`)
        return cache[num]
    } else {
        let result = num + 80
        cache[num] = result
        console.log(`New calculation: ${result}`)
        return result
    }
}

memoizedAdd80(20)
memoizedAdd80(20)
memoizedAdd80(4000)
memoizedAdd80(4000)
console.log(' ')


// Recursive fobinacci without dynamic programming
let numCalculations = 0
const fib = (index) => {
    if (index < 2) {
        return index
    } else {
        numCalculations += 2
        return fib(index - 1) + fib(index - 2)
    }
}

console.log(fib(40))
console.log(`Num Calculations: ${numCalculations}`)

// Recursive fobinacci without dynamic programming
let fibCache = {}
let numCalculationsDy = 0
const fibDy = (index) => {
    if (index < 2) {
        return index
    } else {
        let firstNum = 0
        if (fibCache[index - 1]) {
            firstNum = fibCache[index - 1]
        } else {
            numCalculationsDy++
            let result = fibDy(index - 1)
            fibCache[index - 1] = result
            firstNum = result
        }

        let secondNum = 0
        if (fibCache[index - 2]) {
            secondNum = fibCache[index - 2]
        } else {
            numCalculationsDy++
            let result = fibDy(index - 2)
            fibCache[index - 2] = result
            secondNum = result
        }

        return firstNum + secondNum
    }
}

console.log(fibDy(40))
console.log(`Num Calculations: ${numCalculationsDy}`)
