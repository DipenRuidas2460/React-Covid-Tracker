// Singly Link-List :---

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }

}

class LinkList {
    constructor() {
        this.head = null;
    }

    insertAtHead(d) {
        if (this.head == null) {      // empty linkedList
            let temp = new Node(d)
            this.head = temp
            this.tail = temp
        } else {
            let temp = new Node(d)
            temp.next = this.head
            this.head = temp
        }
    }

    insertAtTail(d) {
        if (this.tail == null) {          // empty linkedList
            let temp = new Node(d)
            this.tail = temp
            this.head = temp
        } else {
            let temp = new Node(d)
            this.tail.next = temp;
            this.tail = temp
        }
    }

    insertAtPosition(position, d) {
        // inserting first node

        if (position == 1) {
            this.insertAtHead(d)
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

        if (temp == null) {
            this.insertAtTail(d);
            return;
        }
        let nodeToInsert = new Node(d)
        nodeToInsert.next = temp.next
        temp.next = nodeToInsert;
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

    insertAtIndex(index, element) {
        if (index < 0 || index > this.size) return console.log("please enter a valid index.");
        else {
            let node = new Node(element)
            let curr, prev;
            curr = this.head
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            }
            else {
                curr = this.head;
                let it = 0
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                node.next = curr;
                prev.next = node;
            }
            this.size++
        }
    }

    deleteNode(index) {
        if (index === 1) {
            let temp = this.head
            this.head = this.head.next;
            temp.next = null;
        }
        else {
            let cnt = 1
            let curr = this.head
            let lead = null
            while (cnt < index) {
                lead = curr
                curr = curr.next;
                cnt++;
            }
            if (curr.next == null) {
                lead.next = curr.next
                this.tail = lead
            } else {
                lead.next = curr.next
                curr.next = null
            }
        }
    }


    print() {
        let temp = this.head
        while (temp != null) {
            console.log(temp.val, temp.next);
            temp = temp.next;
        }
    }

    main() {
        // let node1 = new Node(10)
        // console.log("First time:-", node1.val, node1.next);
        // this.head = node1;
        // this.tail = node1;
        this.head = null          // empty linkedList
        this.tail = null          // empty linkedList
        // this.print()
        this.insertAtPosition(0, 12);
        // this.insertAtHead(16)
        // this.print()
        // this.insertAtHead(17)
        // // this.print()
        // this.insertAtTail(11);
        // this.insertAtTail(19)
        // this.insertAtPosition(2, 15);
        // this.insertAtPosition(4, 18)
        // this.deleteNode(1)
        this.print()
        console.log("Head:-", this.head);
        console.log("Tail:-", this.tail);
        console.log("Size of Singly LinkedList:-", this.getLength())
    }

}

let SinglyList = new LinkList()
SinglyList.main()



// Normal function

// let insertAtHead = function (d) {
//     let temp = new Node(d)
//     temp.next = this.head
//     this.head = temp
// }

// let insertAtTail = function (d) {
//     let temp = new Node(d)
//     this.tail.next = temp;
//     this.tail = temp
// }

// let insertAtPosition = function (position, d) {
//     // inserting first node

//     if (position == 1) {
//         insertAtHead(d)
//         return;
//     }

//     // inserting in middle node
//     let temp = this.head;
//     let count = 1
//     while (count < position - 1) {
//         temp = temp.next;
//         count++;
//     }
//     // inserting last node

//     if (temp.next == null) {
//         insertAtTail(d);
//         return;
//     }
//     let nodeToInsert = new Node(d)
//     nodeToInsert.next = temp.next
//     temp.next = nodeToInsert;
// }


// let insertAtIndex = function (index, element) {
//     if (index < 0 || index > this.size) return console.log("please enter a valid index.");
//     else {
//         let node = new Node(element)
//         let curr, prev;
//         curr = this.head
//         if (index == 0) {
//             node.next = this.head;
//             this.head = node;
//         }
//         else {
//             curr = this.head;
//             let it = 0
//             while (it < index) {
//                 it++;
//                 prev = curr;
//                 curr = curr.next;
//             }
//             node.next = curr;
//             prev.next = node;
//         }
//         this.size++
//     }
// }

// let deleteNode = function (index) {
//     let cnt = 1
//     let temp = this.head
//     if (index === 1) {
//         this.head = this.head.next;
//         temp.next = null;
//     }
//     else {
//         while (cnt < index - 1) {
//             temp = temp.next;
//             cnt++;
//         }
//         let temp2 = temp.next
//         let nextNode = temp.next.next;
//         temp.next = nextNode;
//         if (temp.next == null) this.tail = temp;
//         temp2 = null;
//     }
// }

// let print = function () {
//     let temp = this.head
//     while (temp != null) {
//         console.log(temp.val, temp.next);
//         temp = temp.next;
//     }
// }

// let main = function () {
//     let node1 = new Node(10)
//     // console.log("First time:-", node1.val, node1.next);
//     this.head = node1;
//     this.tail = node1;
//     // print()
//     // insertAtIndex(0, 12);
//     // insertAtHead(16)
//     // print()
//     // insertAtHead(17)
//     // print()
//     insertAtTail(11);
//     insertAtTail(19)
//     insertAtIndex(2, 15);
//     insertAtPosition(4, 18)
//     deleteNode(5)
//     print()
//     console.log("Head:-", this.head);
//     console.log("Tail:-", this.tail);
// }

// // main()

// module.exports = {LinkList, Node}