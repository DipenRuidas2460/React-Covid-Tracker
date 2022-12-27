class Queue {
    constructor(len) {
        this.items = []
        this.maxSize = len
        this.front = 0
        this.rear = 0
    }

    enqueue(ele) {   // enqueue element in queue;
        if (this.rear === this.maxSize) console.log("Queue is full");
        else {
            this.items[this.rear] = ele
            this.rear++
        }
        // return this.items.push(ele)
    }

    remove() {   // remove queue from front.     // other name of remove is dequeue 
        if (this.items.length === 0) return "Queue is empty, delete operation not possible."
        else return this.items.shift();
    }

    size() { return this.items.length }

    isFull() { return this.rear === this.maxSize }

    isEmpty() { return this.items.length === 0 }

    clear() { return this.items = [] }

    frontEle() {
        if (this.items.length === 0) return 'Queue is Empty, front element not present in this queue.'
        else return this.items[this.front]
        // return this.items[0]
    }

    main() {
        this.enqueue(2)
        this.enqueue(5)
        this.enqueue(7)
        this.enqueue(11)
        this.enqueue(13)
        this.enqueue(17)
        console.log(this.items);
        console.log(this.size())
        console.log(this.frontEle());
        console.log(this.isFull());
        console.log(this.remove())
        console.log(this.frontEle());
        console.log(this.items);
        console.log(this.size())
        console.log(this.isEmpty())
        this.clear()
        console.log(this.items);
        console.log(this.size())
        console.log(this.isEmpty())
        console.log(this.frontEle());
        console.log(this.remove())
        console.log(this.items);
    }
}

let queue = new Queue(6)

// queue.main()


// Implementation of Queue using Linked-list:-

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Queue1 {
    constructor(val) {
        this.front = null
        this.rear = null
        // this.maxSize = val
    }
    enqueue(val) {
        var newNode = new Node(val)
        if (this.front === null) {
            this.front = this.rear = newNode
            return;
        }
        this.rear.next = newNode
        this.rear = newNode
    }
    remove() {
        if (this.front === null) return "Queue is Empty, front element not present in this queue."
        let poppedNode = this.front
        this.front = this.front.next
        poppedNode.next = null
        return poppedNode.data
    }

    getLength(){
        let size = 0
        let temp = this.front
        while (temp != null) {
            size++;
            temp = temp.next;
        }
        return size;
    }

    frontEle() {
        if (this.getLength() === 0) return 'Queue is Empty, front element not present in this queue.'
        else return this.front.data
    }

    // isFull() { return this.getLength() === this.maxSize }

    isEmpty() { return this.getLength() === 0 }

    main() {
        console.log(this.isEmpty());
        console.log("Length of Queue:- ",this.getLength());
        this.enqueue(10)
        this.enqueue(11)
        this.enqueue(12)
        this.enqueue(13)
        this.enqueue(14)
        this.enqueue(15)
        console.log("Front element:- ",this.frontEle());
        // console.log(this.isFull());
        console.log("Deleted element from Queue:- ",this.remove())
        console.log("Front element:- ",this.frontEle());
        console.log(newQueue);
        console.log("Length of Queue:- ",this.getLength())
        console.log(this.isEmpty())
        console.log("Deleted element from Queue:- ",this.remove())
        console.log("Front element:- ",this.frontEle());
        console.log(newQueue);
        console.log("Length of Queue:- ",this.getLength())
    }
}

var newQueue = new Queue1()
newQueue.main()