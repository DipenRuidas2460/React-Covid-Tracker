var reverseList = (head) => {
    if (!head || !head.next) return head;
    let temp = head;
    let prev = null
    while (temp) {
        let curr = temp.next
        temp.next = prev
        prev = temp
        temp = curr
    }
    head = prev
    return prev;
}