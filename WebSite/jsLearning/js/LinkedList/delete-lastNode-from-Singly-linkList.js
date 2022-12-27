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

    deleteLastNode(index) {
        let cnt = 1
        let lead = this.head
        if (index == 1) {
            this.head = this.head.next
            lead.next = null
        } else {
            while (cnt < index - 1) {
                lead = lead.next
                cnt++
            }
            let temp2 = lead.next
            let nextNode = lead.next.next
            lead.next = nextNode
            if (lead.next == null) this.tail = lead;
            temp2 = null;
        }
    }
}

function solution(a, arr) {
    let newList = new LinkList()
    newList.head = null
    if(arr.length == 0) return "no element present"
    for (let i of arr) newList.push(i);
    newList.deleteLastNode(arr.length)
    if (newList.head == null) return "no element present"
    let ans = []
    for (let i = newList.head; i != null; i = i.next) ans.push(i.value)
    return ans.join(" ")
}

console.log(solution(7, [2, 6, 4, 7, 8, 2, 9]));
console.log(solution(0,[]));
console.log(solution(1, [3]));