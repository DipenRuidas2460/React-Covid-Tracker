function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var deleteDuplicates = function (head){
    let dummy = new ListNode(-Infinity, head);
    let prev = dummy
    let curr = head
    while (curr) {
        if (curr.val === prev.val) {
            while (curr && (curr.val === prev.val)) {
                curr = curr.next;
            }
            prev.next.next = null
            prev.next = curr
        } else{
            prev = curr
            curr = curr.next;
        }
    }
    return dummy.next;
}