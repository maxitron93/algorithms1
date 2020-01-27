class Node {
    constructor(value, next=null){
        this.value = value
        this.next = null
        this.prior = null // For doubly linked list
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        let new_node = new Node(value)
        new_node.prior = this.tail // For doubly linked list
        this.tail.next = new_node
        this.tail = new_node
        this.length += 1
        return this
    }

    prepend(value) {
        let new_node = new Node(value)
        this.head.prior = new_node // For doubly linked list
        new_node.next = this.head
        this.head = new_node
        this.length += 1
        return this
    }

    traverseToIndex(index) {
        let node = this.head
        for (let i = 0; i < index; i++) {
            node = node.next
        }
        return node
    }

    lookup(index) {
        let current_node = this.traverseToIndex(index)
        let value = current_node.value
        return value
    }

    insert(value, index) {
        if (index > this.length) {
            console.log(`Index out of bounds. This linked list only has ${this.length} nodes.`)
            return
        } else if (index == 0) {
            this.prepend(value)
        } else if (index == this.length) {
            this.append(value)
        } else {
            let current_node = this.traverseToIndex(index - 1)
            let new_node = new Node(value)
            new_node.prior = current_node // For double linked list
            new_node.next = current_node.next
            current_node.next.prior = new_node // For double linked list
            current_node.next = new_node
            this.length += 1
            return this
        }
    }

    remove(index) {
        if (index >= this.length) {
            console.log(`Index out of bounds. This linked list only has ${this.length} nodes.`)
            return
        } else if (index == 0) {
            this.head = this.head.next
            this.length -= 1
        } else {
            let prior_node = this.traverseToIndex(index - 1)
            prior_node.next.next.prior = prior_node // For Doubly Linked List
            prior_node.next = prior_node.next.next
            this.length -= 1
            return this
        }
    }

    print_list() {
        let values = []
        let node = this.head
        while (node.next != null) {
            values.push(node.value)
            node = node.next
        }
        values.push(node.value)
        console.log(values)
        return
    }

    // reverse(current_node=this.head) {
    //     if (this.head.next == null) {
    //         return this
    //     }
    //     let previous = null
    //     let current = this.head
    //     let next = current.next
    //     while(next != null) {
    //         after = next.next
    //         current.next = previous
    //         next.next = current
            
    //         previous = current
    //         current = next
    //         next = current.next
    //     }
    // }
}

let my_linked_list = new LinkedList(10)
my_linked_list.print_list()

my_linked_list.append(5)
my_linked_list.print_list()

my_linked_list.append(16)
my_linked_list.print_list()

my_linked_list.prepend(12)
my_linked_list.print_list()

console.log(my_linked_list.lookup(0))

my_linked_list.insert(100,0)
my_linked_list.print_list()

my_linked_list.insert(200,1)
my_linked_list.print_list()

my_linked_list.insert(50,3)
my_linked_list.print_list()

my_linked_list.insert(500,7)
my_linked_list.print_list()

console.log(my_linked_list.lookup(5))

my_linked_list.insert(99,2)
my_linked_list.print_list()

my_linked_list.remove(2)
my_linked_list.print_list()

my_linked_list.insert(101,1)
my_linked_list.print_list()

