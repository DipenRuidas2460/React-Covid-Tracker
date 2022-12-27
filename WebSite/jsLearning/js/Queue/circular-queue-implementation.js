class CircularQueue {
    constructor(len) {
        this.items = []
        this.maxSize = len
        this.front = -1
        this.rear = -1
    }

    enqueue(ele) {   // enqueue element in Circular queue;
        if ((this.front === 0 && this.rear === this.maxSize - 1) || (this.rear === (this.front - 1) % (this.maxSize - 1))) {
            console.log("Queue is full");
            return false;
        }
        else if (this.front === -1) this.front = this.rear = 0;
        else if ((this.rear === this.maxSize - 1) && this.front !== 0) this.rear = 0;
        else this.rear++;  // normal flow
        this.items[this.rear] = ele;   // push
        return true
        // return this.items.push(ele)
    }

    remove() {   // remove Circular queue.     // other name of remove is dequeue 
        if (this.items.length === 0) return "Queue is empty, delete operation not possible."
        let ans = this.items[this.front]
        this.items[this.front] = -1
        if (this.front === this.rear) this.front = this.rear = -1;
        else if (this.front === this.maxSize - 1) this.front = 0; // to maintain cyclecic nature
        else this.front++; // normal case
        return ans
    }

    size() { return this.items.length }

    isFull() { return (this.front === 0 && this.rear === this.maxSize - 1) || (this.rear === (this.front - 1) % (this.maxSize - 1)) }

    isEmpty() { return this.items.length === 0 }

    clear() { return this.items = [] }

    frontEle() {
        if (this.items.length === 0) return 'Queue is Empty, front element not present in this queue.'
        else return this.items[this.front]
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
        console.log(this.remove());
        console.log(this.remove());
        console.log(this.frontEle());
        console.log(this.items);
        console.log(this.size())
        this.enqueue(18)
        this.enqueue(19)
        console.log(this.items);
        console.log(this.size())
        console.log(this.isEmpty())
        // this.clear()
        console.log(this.items);
        console.log(this.size())
        console.log(this.isEmpty())
        console.log(this.frontEle());
        console.log(this.remove())
        console.log(this.items);
    }
}

let queue = new CircularQueue(6)
queue.main()