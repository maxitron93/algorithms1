// Binary Search Tree - my implementation attempt
class Node {
    constructor(value=0) {
        this.value = value
        this.right = null
        this.left = null
    }
}

class BinarySearchTree {
    constructor(value) {
        let newNode = new Node(value)
        this.root = newNode
    }

    insert(value) {
        let newNode = new Node(value)
        let parentNode = this.root
        while (true) {
            if (parentNode.value == newNode.value) {
                console.log('Duplicate value. Ignored')
                break
            } else if (parentNode.value > newNode.value) {
                if (parentNode.left === null) {
                    parentNode.left = newNode
                    break
                } else {
                    parentNode = parentNode.left
                }
            } else if (parentNode.value < newNode.value) {
                if (parentNode.right === null) {
                    parentNode.right = newNode
                    break
                } else {
                    parentNode = parentNode.right
                }
            }
        }
    }
}

let myBST = new BinarySearchTree(9)
// console.log(myBST)

myBST.insert(4)
// console.log(myBST)

myBST.insert(1)
// console.log(myBST)

myBST.insert(6)
// console.log(myBST)

myBST.insert(20)
// console.log(myBST)

myBST.insert(15)
// console.log(myBST)

myBST.insert(170)
console.log(myBST)


// BFS algorithm - my implementation attempt
BinarySearchTree.prototype.breadthFirstSearch = function() {
    let currentNode = this.root
    let visitedNodes = []
    let queue = []
    queue.push(currentNode)

    while(queue.length > 0) {
        // Get the first node in the queue and place it in the queue
        currentNode = queue.shift()
        visitedNodes.push(currentNode.value)

        // Get the child nodes and place them in the queue
        if (currentNode.left !== null) {
            queue.push(currentNode.left)
        } 
        
        if (currentNode.right !== null) {
            queue.push(currentNode.right)
        }
    }

    // Return the list of visitedNodes
    return visitedNodes
}

console.log(myBST.breadthFirstSearch())


// In Order DFS - don't really want to implement now. Might get back to it later.
BinarySearchTree.prototype.inOrderDFS = function() {
    console.log('Hey')
}

myBST.inOrderDFS()
