function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var deleteNode = function(node){
    let nxt = node.next.next
    node.val = node.next.val
    node.next.next = null
    node.next = nxt
}