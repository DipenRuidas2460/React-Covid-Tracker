var reverseKGroup = (head, k) => {
    let dummy = new ListNode(-Infinity, head);
    let groupPrev = dummy;
    while (true) {
        let kth = getKPos(groupPrev, k);
        if (!kth) break;
        let prev = kth.next;
        let groupNext = kth.next;
        let curr = groupPrev.next;
        while (curr !== groupNext) {
            let temp = curr.next;
            curr.next = prev
            prev = curr
            curr = temp;
        }
        let tmp = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = tmp;
    }

    return dummy.next;
}

let getKPos = (present, k) => {
    while (present && k > 0) {
        present = present.next;
        k--;
    }
    return present;
}