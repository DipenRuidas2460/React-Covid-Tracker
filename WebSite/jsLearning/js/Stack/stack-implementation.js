class Stack {
    constructor(len) {
        this.items = []
        this.maxSize = len
        this.top = -1
    }

    add(ele) {
        if (this.maxSize - this.top > 1) {
            this.top++;
            this.items[this.top] = ele;
        } else console.log("Stack overflow");
        // return this.items.push(ele)
    }

    remove() {   // remove at top
        if (this.top >= 0) {
            this.top--;
            this.items.pop()
        }
        else console.log("Stack underflow");
        // if(this.items.length > 0) return this.items.pop();
    }

    size() { return this.items.length }

    isFull() { return this.items.length === this.maxSize }

    isEmpty() { return this.items.length === 0 }

    clear() { return this.items = [] }

    peekEle() {
        if (this.items.length === 0) return null
        if (this.top >= 0 && this.top < this.maxSize) return this.items[this.top]
        else console.log('Stack is Empty');
        // return this.items[this.items.length-1]
    }

    main() {
        this.add(2)
        this.add(5)
        this.add(7)
        this.add(11)
        this.add(13)
        this.add(17)
        console.log(this.items);
        console.log(this.size())
        console.log(this.peekEle());
        console.log(this.isFull());
        this.remove();
        console.log(this.items);
        console.log(this.size())
        console.log(this.isEmpty())
        this.clear()
        console.log(this.items);
        console.log(this.size())
        console.log(this.isEmpty())
        console.log(this.peekEle());
        this.remove()
        console.log(this.items);
    }
}

let stack = new Stack(6)

// stack.main()


// Implementation of Stack using Linked-list:-

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack1 {
    constructor() {
        this.top = null
        this.last = null
        this.size = 0
    }
    add(value) {
        var newNode = new Node(value)
        if (this.size == 0) {
            this.top = this.last = newNode
        } else {  // insert at beginning
            var temp = this.top
            this.top = newNode
            this.top.next = temp
        }
        return ++this.size
    }
    remove() {
        if (!this.top) return "Stack is Empty, deletation not performe."
        var poppedNode = this.top
        if (this.top == this.last) this.last = null;
        this.top = this.top.next;
        poppedNode.next = null
        this.size--;
        return poppedNode.value;
    }

    getLength(){
        // let sz = 0
        // let temp = this.top
        // while (temp != null) {
        //     sz++;
        //     temp = temp.next;
        // }
        // return sz;
        return this.size;
    }

    // isFull() { return this.items.length === this.maxSize }

    isEmpty() { return this.getLength() === 0 }

    peekEle() {
        if (this.getLength() === 0) return 'Stack is Empty, peek element not exists'
        else return this.top.value
    }

    main() {
        console.log(this.isEmpty());
        this.add(2)
        this.add(5)
        this.add(7)
        this.add(11)
        this.add(13)
        this.add(17)
        console.log(newStack);
        console.log(this.getLength())
        console.log(this.peekEle());
        console.log(this.remove())
        console.log(newStack);
        console.log(this.getLength())
        console.log(this.isEmpty())
        console.log(this.peekEle());
        console.log(this.remove())
        console.log(newStack);
    }
}

var newStack = new Stack1()
newStack.main()