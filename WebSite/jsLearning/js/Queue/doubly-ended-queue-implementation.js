class DoublyEndedQueue {
    constructor(len) {
        this.items = []
        this.maxSize = len
        this.front = -1
        this.rear = -1
    }

    pushFront(x) {
        if (this.isFull()) {
            console.log("Queue is full");
            return false;
        }
        else if (this.front === -1) this.front = this.rear = 0;
        else if ((this.front === 0) && (this.rear !== (this.maxSize - 1))) this.front = this.maxSize - 1;
        else this.front--;
        this.items[this.front] = x;
        return true;
    }

    pushRear(x) {   // enqueue element in Circular queue;
        if (this.isFull()) {
            console.log("Queue is full");
            return false;
        }
        else if (this.front === -1) this.front = this.rear = 0;
        else if ((this.rear === this.maxSize - 1) && (this.front !== 0)) this.rear = 0;
        else this.rear++;  // normal flow
        this.items[this.rear] = x;   // push
        return true;
        // return this.items.push(ele)
    }

    popFront() {   // remove Circular queue.     // other name of remove is dequeue 
        if (this.isEmpty()) return "Queue is empty, delete operation not possible."
        let ans = this.items[this.front]
        this.items[this.front] = -1
        if (this.front === this.rear) this.front = this.rear = -1;
        else if (this.front === this.maxSize - 1) this.front = 0; // to maintain cyclecic nature
        else this.front++; // normal case
        return ans
    }

    popRear() {
        if (this.isEmpty()) return "Queue is empty, delete operation not possible."
        let ans = this.items[this.rear]
        this.items[this.rear] = -1
        if (this.front === this.rear) this.front = this.rear = -1;
        else if (this.rear === 0) this.rear = this.maxSize - 1; // to maintain cyclecic nature
        else this.rear--; // normal case
        return ans
    }

    size() { return this.items.length }

    isFull() { return (this.front === 0 && this.rear === this.maxSize - 1) || (this.front !== 0 && this.rear === (this.front - 1) % (this.maxSize - 1)) }

    isEmpty() { return this.items.length === 0 }

    clear() { return this.items = [] }

    frontEle() {
        if (this.isEmpty()) return 'Queue is Empty, front element not present in this queue.'
        else return this.items[this.front]
    }

    getRearEle() {
        if (this.isEmpty()) return 'Queue is Empty, front element not present in this queue.'
        else return this.items[this.rear]
    }

    main() {
        this.pushRear(2)
        this.pushRear(7)
        this.pushRear(13)
        this.pushRear(19)
        this.pushRear(20)
        this.pushRear(25)
        this.pushRear(30)
        this.pushRear(35)
        console.log(this.items);
        console.log(this.size())
        console.log(this.frontEle());
        console.log(this.isFull());
        console.log(this.popFront());
        console.log(this.popRear());
        console.log(this.getRearEle());
        console.log(this.frontEle());
        console.log(this.items);
        console.log(this.size())
        console.log(this.items);
        console.log(this.size())
        console.log(this.isEmpty())
        // this.clear()
        console.log(this.items);
        console.log(this.size())
        console.log(this.isEmpty())
        console.log(this.frontEle());
        console.log(this.popRear())
        console.log(this.popFront());
        this.popFront()
        console.log(this.frontEle());
        this.pushRear(29)
        this.pushRear(27)
        this.pushFront(28)
        this.pushFront(30)
        this.pushRear(24)
        console.log(this.items);
        console.log(this.frontEle());
        console.log(this.getRearEle());
    }
}

let queue = new DoublyEndedQueue(8)
queue.main()