class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkList {
    constructor(value) {
        let newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
    }

    push(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    reverse() {
        let temp = this.head
        this.head = this.tail
        this.tail = temp
        // let curr = temp.next
        let prev = null
        while (temp) {
            let curr = temp.next
            temp.next = prev
            prev = temp
            temp = curr
        }
        return this.head
    }
}

function solution(arr) {
    var newList = new LinkList()
    newList.head = null
    for (let i of arr) newList.push(i);
    let lead = newList.reverse()
    console.log(lead.value, lead.next);
    if (lead.value == 0) return "no element present"
    let ans = []
    for (let i = lead; i != null; i = i.next)ans.push(i.value)
    return ans.join(" ")
}

console.log(solution([10]));