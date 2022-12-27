var reverse = (node) => {
    let prev = null
    let ref = null
    while (node) {
        ref = node.next
        node.next = prev
        prev = node
        node = ref
    }
    return prev
}

var isPalindrome = (head) => {
    let fast = head
    let slow = head
    let startPoint = head
    let mid = null
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    mid = reverse(slow);
    while (mid) {
        if (startPoint.val !== mid.val) return false;
        mid = mid.next
        startPoint = startPoint.next
    }
    return true;
}
