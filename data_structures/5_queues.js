class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }  
}

class Queue {
    constructor(value) {
        let new_node = new Node(value)
        this.first = new_node
        this.last = new_node
        this.length = 1
    }

    peek() {
        return this.head.value
    }

    enqueue(value) {
        let new_node = new Node(value)
        if (this.length === 0) {
            this.first = new_node
            this.last = new_node
        } else {
            this.last.next = new_node
            this.last = new_node
        }
        this.length++
        return this
    }

    dequeue() {
        let return_node = this.first
        if (this.length === 0) {
            return null
        } else if (this.length === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = this.first.next
        }
        this.length--
        return return_node
    }

    isEmpty() {
        return(this.length === 0)
    }
}

let myQueue = new Queue(5)
console.log(myQueue)

myQueue.enqueue(10)
console.log(myQueue)

myQueue.enqueue(20)
console.log(myQueue)

myQueue.dequeue()
console.log(myQueue)

myQueue.enqueue(50)
console.log(myQueue)

myQueue.dequeue()
console.log(myQueue)

myQueue.dequeue()
console.log(myQueue)

myQueue.dequeue()
console.log(myQueue)

myQueue.enqueue(15)
console.log(myQueue)