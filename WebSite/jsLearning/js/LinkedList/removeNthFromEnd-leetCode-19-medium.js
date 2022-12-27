function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var removeNthFromEnd = function (head, n){
    let dummyHead = new ListNode(-Infinity);
    dummyHead.next = head
    let resultHead = dummyHead
    let count = 0
    let tail = head
    while (count < n) {
        count++;
        tail = tail.next;
    }
    let prev = dummyHead
    let removeNode = head
    while (tail) {
        tail = tail.next
        prev  = prev.next
        removeNode = removeNode.next
    }
    prev.next = removeNode.next
    removeNode.next = null
    return resultHead.next;
}