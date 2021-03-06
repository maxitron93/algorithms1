arr = [100, 64, 7, 3, 8, 10, 61, 1, 45, 73, 99, 0, 5, 25]

// Bubble sort - my implementation attempt
const bubbleSort = (arr) => {
    let sortedArr = arr
    let finishedSorting = false
    while (!finishedSorting) {
        let hadToSort = false
        for (let i = 0; i < sortedArr.length - 1; i++) {
            if (sortedArr[i] > sortedArr[i + 1]) {
                let tempSotrage = sortedArr[i + 1] 
                sortedArr[i + 1] = sortedArr[i]
                sortedArr[i] = tempSotrage
                hadToSort = true
            } 
        }

        if (hadToSort === false) {
            finishedSorting = true
        }
    }
    return sortedArr
}
console.log(bubbleSort(arr))

// Bubble sort - answer given
const bubbleSortAnswer = (arr) => {
    let itterTimes = arr.length - 1
    for (let i = 0; i < itterTimes; i++) {
        let compareTimes = itterTimes - i
        for (let j = 0; j < compareTimes; j++) {
            if (arr[j] > arr[j + 1]) {
                let tempStore = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tempStore
            }
        }
    }
    return arr
}
console.log(bubbleSortAnswer(arr))

// Selection sort - my implementation attempt
const mySelectionSort = (arr) => {
    let itterTimes = arr.length - 1
    for (let i = 0; i < itterTimes; i++) {
        let minVal = arr[i]
        let indexOfMinVal = i
        for (let j = i + 1; j < itterTimes; j++) {
            if (arr[j] < minVal) {
                minVal = arr[j]
                indexOfMinVal = j
            }
        let tempStore = minVal
        arr[i] = minVal
        arr[indexOfMinVal] = tempStore
        }
    }
    return arr
}
console.log(mySelectionSort(arr))

// Selection sort - answer given
// Prett much the same as my implementation :D


// Insertion sort - my implementation attempt
const insertionSort = (arr) => {
    let newArr = [arr[0]]
    itterTimes = arr.length
    for (let i = 1; i < itterTimes; i++) {
        let addToEnd = true
        for (let j = 0; j < newArr.length; j++) {
            if (arr[i] < newArr[j]) {
                newArr.splice(j, 0, arr[i])
                addToEnd = false
                break
            }
        }
        if (addToEnd === true) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(insertionSort(arr))

// Insertion sort - answer given
// Similar implemnetation


// Merge sort - answer given
// Uses a divide an conquer approach (which uses recursion)
const mergeSort = (arr) => {
    // Base case
    if (arr.length === 1) {
        return arr
    }

    // Split array into right and left
    let length = arr.length
    let halfWay = Math.floor(length / 2)
    let left = arr.slice(0, halfWay)
    let right = arr.splice(halfWay)

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    let result = []
    let leftIndex = 0
    let rightIndex = 0
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

console.log(mergeSort(arr))

// Quick sort - not attempted - maybe try later
// Uses a divide an conquer approach (which uses recursion)

