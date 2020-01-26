class Node {
    constructor(value) {
        this.value = value
        this.previous = null
    }
}

// Building a stack using a linked list
class Stack {
    constructor(value) {
        let new_node = new Node(value)
        this.top = new_node
        this.bottom = new_node
        this.length = 1
    }

    peek() {
        if (this.top == null) {
            console.log('Nothing in the stack')
            return
        } else {
            console.log(this.top.value)
            return this.top.value
        }
    }

    push(value) {
        let new_node = new Node(value)
        new_node.previous = this.top
        this.top = new_node
        this.length += 1
        return this
    }

    pop() {
        if(!this.top){
            return null
        } else {
            let top_node = this.top
            this.top = top_node.previous
            this.length -= 1
            return top_node
        }
    }

    printStack() {
        if (this.top == null) {
            console.log('Nothing in the stack')
            return
        } else {
            let stack_printout = []
            let current_node = this.top
            
            while (current_node.previous != null) {
                stack_printout.push(current_node.value)
                current_node = current_node.previous
            }
            stack_printout.push(current_node.value)
            console.log(stack_printout)
            return    
        }
    }
}

myStack = new Stack(10)
myStack.printStack()

myStack.push(20)
myStack.printStack()

myStack.push(50)
myStack.printStack()

myStack.pop()
myStack.printStack()

myStack.pop()
myStack.printStack()

myStack.pop()
myStack.printStack()

myStack.push(20)
myStack.printStack()

myStack.push(200)
myStack.printStack()

myStack.peek()
