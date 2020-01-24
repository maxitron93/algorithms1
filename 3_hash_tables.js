// Using a map instead of an object lets us use any data type as the key. Insertion order is also maintained.
const a = new Map()

// Building a Hash Table
class HashTable {
    constructor(size) {
        this.data = new Array(size) // Create a Hast Table with a fixed size of memory
    }

    _hash(key) {
        let hash = 0
        for(let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }

    set(key, value) { // This creates a 'linked list' when a collision occurs
        const address = this._hash(key)
        if (this.data[address]) {
            this.data[address].push([key, value])
        } else {
            this.data[address] = [[key, value]]
        }
        return value
    }

    get(key) { // Get the value at this key
        const address = this._hash(key)
        for (let i=0; i < this.data[address].length; i++) {
            if (this.data[address][i][0] == key) {
                return this.data[address][i][1]
            } 
        }
    }

    keys() { // get all the keys
        const keysArray = []
        for (let i=0; i < this.data.length; i++) {
            let bucket = this.data[i]
            if (bucket) {
                if (bucket.length == 1) {
                    keysArray.push(bucket[0][0])
                } else {
                    for (let j=0; j < bucket.length; j++) {
                        keysArray.push(bucket[j][0])
                    }
                }
            }
        }
        return keysArray
    }
}

const myHashTable = new HashTable(5) // Memory space = 5
console.log(myHashTable._hash('oranges'))
console.log(myHashTable._hash('apples'))
console.log(myHashTable)

myHashTable.set('baloni', 'sandwich')
console.log(myHashTable)
console.log(myHashTable.get('baloni'))

myHashTable.set('fruit', 'pineapple')
console.log(myHashTable)
console.log(myHashTable.get('fruit'))

myHashTable.set('car', 'ferrari')
console.log(myHashTable)
console.log(myHashTable.get('car'))

myHashTable.set('boat', 'lagoon')
console.log(myHashTable)
console.log(myHashTable.get('boat'))

myHashTable.set('animal', 'dog')
console.log(myHashTable)
console.log(myHashTable.get('animal'))

console.log(myHashTable.keys())

// First recurring character problem
// Given an array of characters, return the first recurring character
const firstRecurring = (arr) => {
    firstInstance = undefined
    let map = new Map
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = 'exists'
        } else {
            firstInstance = arr[i]
            break
        }
    }
    return firstInstance
}
// Uses a hash map instead of nested for loop for better time complexity. The time complexity is now O(n) instead of O(n^2). But the tradeoff is more space complexity because the function creates a Map.

arr1 = [1,6,8,5,6,1,7,0] // should return 6
arr2 = [1,6,8,5,7,1,7,0] // should return 1
arr3 = [1,6,8,5,7,9,2,0] // should return undefined 

console.log(firstRecurring(arr1))
console.log(firstRecurring(arr2))
console.log(firstRecurring(arr3))
