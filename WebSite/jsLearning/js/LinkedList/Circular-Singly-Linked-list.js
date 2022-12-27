class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class CircularSinglyLinkedList {
    constructor() {
        this.tail = null
    }

    insertAtPosition(ele, d) {
        // empty list
        if (this.tail === null) {
            let newNode = new Node(d)
            this.tail = newNode
            newNode.next = newNode
        } else {
            // non empty list
            let curr = this.tail
            while (curr.data !== ele) curr = curr.next;
            let temp = new Node(d)
            temp.next = curr.next
            curr.next = temp
        }
    }

    getLength() {
        let size = 1
        let temp = this.tail
        while (temp.next != this.tail) {
            size++;
            temp = temp.next
        }
        return size
    }

    deleteNode(val) {
        if (this.tail === null) {
            console.log("Linked List is Empty");
            return;
        } else {
            let prev = this.tail
            let curr = prev.next
            while (curr.data != val) {
                prev = curr
                curr = curr.next
            }
            prev.next = curr.next
            // 1 one circular-linked-list-deletation
            if(curr === prev) this.tail = null;
            // >= 2 node - delete one node
            if (this.tail === curr) this.tail = prev;
            curr.next = null
        }
    }

    print() {
        let temp = this.tail
        if(this.tail === null){
            console.log("Linked List is Empty");
            return;
        }
        do {
            console.log(this.tail.data, this.tail.next);
            this.tail = this.tail.next
        } while (this.tail != temp);
    }

    main() {
        // let temp = new Node(11)
        // this.tail = temp
        // temp.next = temp
        this.tail = null
        this.insertAtPosition(0, 3)
        this.deleteNode(3)
        // this.deleteNode(11)
        this.print()
        this.insertAtPosition(0, 5)
        this.insertAtPosition(5, 7)
        this.insertAtPosition(5, 6)
        this.insertAtPosition(7, 9)
        // this.deleteNode(5)
        this.deleteNode(5)
        // this.deleteNode(6)
        // this.deleteNode(9)
        this.print()
        console.log("Size of the Circular-Singly-Linked-list:-",this.getLength())
    }
}

let circular = new CircularSinglyLinkedList()
circular.main()