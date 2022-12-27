class Node {
    constructor(data) {
        this.prev = null
        this.data = data
        this.next = null
    }
}

class CircularDoublyLinkedList {
    constructor() {
        this.start = null
    }

    getLength() {
        let size = 1
        let temp = this.start
        if (temp === null) return size = 0;
        while (temp.next != this.start) {
            size++;
            temp = temp.next
        }
        return size
    }

    insertAtHead(d) {
        // empty linked list
        if (this.start === null) {
            let temp = new Node(d)
            temp.next = temp;
            temp.prev = temp
            this.start = temp;
        } else {
            let last = this.start.prev
            let temp = new Node(d)
            temp.next = this.start
            temp.prev = last
            last.next = temp
            this.start.prev = temp
            this.start = temp
        }
    }

    insertAtEnd(d) {
        // empty linked list
        if (this.start === null) {
            let temp = new Node(d)
            temp.next = temp;
            temp.prev = temp
            this.start = temp;
        } else {
            // non empty linked-list
            let last = this.start.prev
            let temp = new Node(d)
            temp.next = this.start
            last.next = temp
            temp.prev = last
            this.start.prev = temp
        }
    }

    insertAtPos(pos, d) {
        // empty linked list
        if (this.start === null) {
            let temp = new Node(d)
            temp.next = temp;
            temp.prev = temp
            this.start = temp;
        } else {
            // non empty linked-list
            let cnt = 1
            let len = this.getLength()
            if ((pos <= 0) || (pos > len)) console.log("Invalid Position");
            else if (pos === 1) {
                this.insertAtHead(d)
                return;
            }
            else {
                let temp = new Node(d)
                let curr = this.start
                while (cnt < pos - 1) {
                    curr = curr.next
                    cnt++;
                }
                temp.prev = curr
                temp.next = curr.next
                curr.next.prev = temp
                curr.next = temp
            }
        }

    }


    deleteNode(val) {
        if (this.start === null) {
            console.log("Linked List is Empty, Deletation not possible");
            return;
        } else {
            let bef = this.start
            let curr = bef.next
            while (curr.data != val) {
                bef = curr
                curr = curr.next
            }
            // 1 one circular-Doubly-linked-list-deletation
            if (curr === bef) this.start = null;
            // delete first node(start node)
            // >= 2 node - delete one node
            else {
                bef.next = curr.next
                curr.next.prev = bef
                if (this.start === curr) this.start = bef
            }
            curr.prev = null
            curr.next = null
            // console.log("prev:-", curr.prev, "curr", curr.next);
        }
    }

    print() {
        let temp = this.start
        if (this.start === null) {
            console.log("Linked List is Empty");
            return;
        }
        // console.log("Traversal in forward direction:-");
        do {
            console.log(this.start.data)
            //console.log(this.start.prev, this.start.data, this.start.next);
            this.start = this.start.next
        } while (this.start != temp)
    }

    main() {
        this.start = null
        this.insertAtPos(0, 12)
        this.insertAtEnd(40)
        this.insertAtHead(70)
        this.insertAtHead(60)
        this.insertAtPos(1, 5)
        this.deleteNode(12)
        // this.print()
        this.insertAtPos(1, 8)
        this.insertAtPos(1, 6)
        this.insertAtEnd(7)
        // // this.print()
        this.insertAtPos(4, 17)
        this.insertAtPos(5, 10)
        this.insertAtPos(6, 18)
        this.insertAtEnd(11)
        this.deleteNode(8)
        this.print()
        console.log("Size of the Circular-Doubly Linked List:-", this.getLength());
    }
}

let linkList = new CircularDoublyLinkedList()
linkList.main() 