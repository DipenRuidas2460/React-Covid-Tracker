var swapPairs = (head) =>{
    let dummy = new ListNode(-Infinity, head);
    let prev = dummy;
    while (head && head.next) {
        let p1 = head;
        let p2 = head.next

        prev.next = p2;
        p1.next = p2.next
        p2.next = p1

        prev = p1
        head = head.next
    }

    return dummy.next;
}