class Node {
    constructor(data) {
        this.prev = null
        this.data = data
        this.next = null
    }
}


class DoublyLinkList {
    constructor() {
        this.head = null
    }

    getLength() {
        let size = 0
        let temp = this.head
        while (temp != null) {
            size++;
            temp = temp.next
        }
        return size
    }

    insertAtHead(val) {
        if (this.head == null) {
            let temp = new Node(val)
            this.head = temp
            this.tail = temp
        } else {
            let temp = new Node(val)
            temp.next = this.head
            this.head.prev = temp
            this.head = temp
        }
    }

    insertAtTail(val) {
        if (this.tail == null) {
            let temp = new Node(val)
            this.tail = temp
            this.head = temp
        } else {
            let temp = new Node(val)
            this.tail.next = temp
            temp.prev = this.tail
            this.tail = temp
        }
    }

    insertAtPosition(position, d) {
        // inserting first node

        if (position == 1) {
            doublyList.insertAtHead(d)
            return;
        }

        // inserting in middle node
        let temp = this.head;
        let count = 1
        while (count < position - 1) {
            temp = temp.next;
            count++;
        }
        // inserting last node

        if (temp.next == null) {
            doublyList.insertAtTail(d);
            return;
        }
        let nodeToInsert = new Node(d)
        nodeToInsert.next = temp.next
        temp.next.prev = nodeToInsert;
        temp.next = nodeToInsert
        nodeToInsert.prev = temp
    }

    deleteNode(index) {
        // Delete first or starting node
        if (index === 1) {
            let temp = this.head
            temp.next.prev = null
            this.head = temp.next
            temp.next = null;
        }      // Delete middle node and last node
        else {
            let curr = this.head
            let lead = null
            let cnt = 1
            while (cnt < index) {
                lead = curr;
                curr = curr.next;
                cnt++;
            }
            if (curr.next == null) {
                curr.prev = null
                lead.next = curr.next
                this.tail = lead
            } else {
                curr.prev = null
                lead.next = curr.next
                curr.next.prev = lead
                curr.next = null
            }
        }
    }

    print() {
        let temp = this.head
        while (temp != null) {
            console.log(temp.prev, temp.data, temp.next);
            temp = temp.next;
        }
    }

    main() {
        let node1 = new Node(10)
        // console.log("First time:-", node1.data, node1.next, node1.prev);
        // this.head = node1;
        // this.tail = node1;
        this.head = null      // empty linkedlist
        this.tail = null      // empty linkedlist
        this.insertAtHead(11)
        this.insertAtTail(25)
        this.insertAtPosition(3, 18)
        this.deleteNode(3)
        this.print()
        console.log("Head:-", this.head);
        console.log("Tail:-", this.tail);
        console.log("Size of Doubly LinkedList:-", this.getLength())
    }
}

let doublyList = new DoublyLinkList()
doublyList.main()