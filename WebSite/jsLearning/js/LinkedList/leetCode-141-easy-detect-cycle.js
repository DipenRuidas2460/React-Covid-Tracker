function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var hasCycle = function (head){
    let fast = head
    let slow = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if(fast === slow) return true;
    }
    return false;
}