var reverseBetween = (head, left, right) => {
    let dummy = new ListNode(-Infinity, head);
    let prev = dummy
    let curr = head
    for(let i=1; i<left; i++){
        prev = curr;
        curr = curr.next
    }

    let front = prev;
    let back = curr;
    for (let j = left; j <= right; j++) {
        let ref = curr.next;
        curr.next = prev;
        prev = curr;
        curr = ref;
    }

    front.next = prev;
    back.next = curr

    return dummy.next;
}