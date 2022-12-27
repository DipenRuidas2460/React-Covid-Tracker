function listNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


var mergeTwoLists = function (l1, l2) {
    let curr = new listNode()
    let dummy = curr
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            curr.next = l1
            l1 = l1.next
        } else {
            curr.next = l2
            l2 = l2.next
        }
        curr = curr.next
    }
    if (l1) curr.next = l1
    else curr.next = l2
    return dummy.next
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));