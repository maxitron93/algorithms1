// Array basics
const strings = ['a', 'b', 'c', 'd']
console.log(strings)
strings.push('e') // O(1) because it knows where the last position is
console.log(strings)
strings.pop() // O(1) because it knows where the last item is
console.log(strings)
strings.pop() // O(1) because it knows where the last item is
console.log(strings) 
strings.unshift('x') // O(n) because it needs to shift every item in the array
console.log(strings)
strings.unshift('first') // O(n) because it needs to shift every item in the array
console.log(strings)
strings.splice(3, 0, 'middle') // O(n) because it needs to shift every item in the array
console.log(strings)

// Implementing an array in JavaScript
class MyArray {
    constructor() {
        this.length = 0,
        this.data = {}
    }

    get(index) { // O(1)
        return this.data[index]
    }

    push(item) { // O(1)
        this.data[this.length] = item
        this.length++
        return this.length // Return length for good measure
    }

    pop() { // O(1)
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return lastItem // Return last item for good measure
    }

    delete(index) { // O(n)
        const deletedItem = this.data[index]
        delete this.data[index]
        this.shiftItems(index)
        return deletedItem
    }  

    shiftItems(index) {
        for (let i = index; i < this.length; i ++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
    }
}

const newArray = new MyArray
console.log(newArray)

newArray.push(1)
console.log(newArray.get(0))
console.log(newArray)

newArray.push(2)
newArray.push(3)
newArray.push(4)
newArray.push(5)
console.log(newArray)

newArray.pop()
console.log(newArray)

newArray.pop()
console.log(newArray)

newArray.delete(1)
console.log(newArray)

newArray.push('l')
newArray.push('m')
newArray.push('n')
newArray.push('o')
newArray.push('p')
console.log(newArray.data)

newArray.delete(3)
console.log(newArray.data)

// Reversing a string can be thought of as reversing an array
// Create a function that reverses a string

const reverseString = (string) => {
    // Check input
    if (!string || typeof string != 'string') {
        return 'Input needs to be a string'
    } else {
        newString = ''
        for (i = string.length - 1; i >= 0; i--) {
            newString += string[i]
        }
        return newString
    }
}

console.log(reverseString('Hi my name is Earl'))
console.log(reverseString('This is a second reversed string'))
console.log(reverseString(6))

// Merging arrays
// Create a function to merge two arrays in a way that' sorted
function mergeArray(arr1, arr2) {
    mergedArray = []
    counter1 = 0
    counter2 = 0

    while (true) {
        if (counter1 == arr1.length) {
            for (i = counter2; i < arr2.length; i++) {
                mergedArray.push(arr2[i])
            }
            return mergedArray
        }
        if (counter2 == arr2.length) {
            for (i = counter1; i < arr1.length; i++) {
                mergedArray.push(arr1[i])
            }
            return mergedArray
        }
        
        if (arr1[counter1] < arr2[counter2]) {
            mergedArray.push(arr1[counter1])
            counter1++
        } else {
            mergedArray.push(arr2[counter2])
            counter2++
        }
    }
}

console.log(mergeArray([1,2,3,4,5], [1,1,1,4,5,6,7,8]))
console.log(mergeArray([1,2,3,4,5], []))
console.log(mergeArray([], [1,1,1,4,5,6,7,8]))
console.log(mergeArray([10,20,30], [10,20,30,40]))
console.log(mergeArray([10,20,30,40], [10,20,30]))
