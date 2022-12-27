// let ListNode1 = require('../LinkedList/SinglyLinkList.js')
// let node = new ListNode1.Node(2)
// let l1 = new ListNode1.LinkList()
// let l2 = new ListNode1.LinkList()
// l1.insertAtHead(2);
// l1.insertAtIndex(1,4)
// l1.insertAtTail(3)
// l2.insertAtPosition(1,5);
// l2.insertAtPosition(2,6)
// l2.insertAtPosition(3,4)
// console.log(l1);
// console.log(l2);

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {
    let carry = 0
    let prevNode = new ListNode();
    let headNode = prevNode;
    while (l1 || l2 || carry) {
        let val1 = 0
        let val2 = 0
        if (l1) {
            val1 = l1.val;
            l1 = l1.next;
        }
        if (l2) {
            val2 = l2.val;
            l2 = l2.next;
        }
        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        const digit = sum % 10;
        const currNode = new ListNode(digit);
        prevNode.next = currNode;
        prevNode = currNode
    }
    return headNode.next;
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))