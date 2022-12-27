class Node1 {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Queue {
    constructor() {
        this.front = null
        this.rear = null
        // this.maxSize = 6
    }
    enqueue(val) {
        var newNode = new Node1(val)
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

    getLength() {
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
        console.log("Length of Queue:- ", this.getLength());
        this.enqueue(10)
        this.enqueue(11)
        this.enqueue(12)
        this.enqueue(13)
        this.enqueue(14)
        this.enqueue(15)
        console.log("Front element:- ", this.frontEle());
        // console.log(this.isFull());
        console.log("Deleted element from Queue:- ", this.remove())
        console.log("Front element:- ", this.frontEle());
        console.log(newQueue);
        console.log("Length of Queue:- ", this.getLength())
        console.log(this.isEmpty())
        console.log("Deleted element from Queue:- ", this.remove())
        console.log("Front element:- ", this.frontEle());
        console.log(newQueue);
        console.log("Length of Queue:- ", this.getLength())
    }
}


class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        let newNode = new Node(val)
        if (this.root === null) this.root = newNode;
        else this.addNewData(this.root, newNode)
    }

    addNewData(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) node.left = newNode;
            else this.addNewData(node.left, newNode);
        } else {
            if (node.right === null) node.right = newNode;
            else this.addNewData(node.right, newNode);
        }
    }

    findMinNode(node) {
        if (!node) return null;
        if (!node.left) return node;
        else return this.findMinNode(node.left);
    }

    getRootNode() {
        return this.root
    }

    remove(val) {
        this.root = this.removeNode(this.root, val);
    }

    removeNode(node, key) {
        if (!node) { return null; }
        else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        }
        else {
            if (!node.left && !node.right) {
                node = null;
                return node;
            }
            if (!node.left) {
                node = node.right;
                return node;
            }
            else if (!node.right) {
                node = node.left;
                return node;
            }
            var aux = this.findMinNode(node.right);
            node.data = aux.data;
            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    searchNode(node, val) {
        if (!node) return null;
        else if (val < node.data) return this.searchNode(node.left, val);
        else if (val > node.data) return this.searchNode(node.right, val);
        else return node;
    }

    levelOrderTraversal(node) {
        if (!node) return null;
        let q = new Queue()
        q.enqueue(node)
        q.enqueue(null)
        while (!q.isEmpty()) {
            let temp = q.frontEle()
            q.remove()
            if (temp === null) { 
                console.log("\n");
                if (!q.isEmpty()) q.enqueue(null); 
            }
            else {
                console.log(temp.data );
                if (temp.left) q.enqueue(temp.left);
                if (temp.right) q.enqueue(temp.right)
            }
        }
    }

    inOrderTraversal(node) {
        if (!node) { return };
        this.inOrderTraversal(node.left);
        console.log(node.data);
        this.inOrderTraversal(node.right);
    }

    preOrderTraversal(node) {
        if (!node) return;
        console.log(node.data);
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
    }

    postOrderTraversal(node) {
        if (!node) return;
        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        console.log(node.data);
    }

    main() {
        this.insert(15);
        this.insert(25);
        this.insert(10);
        this.insert(7);
        this.insert(22);
        this.insert(17)
        this.insert(13)
        this.insert(5)
        this.insert(9)
        this.insert(27)
        console.log("Level order Traversal:- ");
        this.levelOrderTraversal(this.root)
        // console.log("InOrder Traversal:- ");
        // this.inOrderTraversal(this.root)
        // console.log("PostOrder Traversal:- ");
        // this.postOrderTraversal(this.root)
        // this.remove(15)
        // this.remove(10)
        console.log(this.searchNode(this.root, 10))
        // this.remove(7)
        console.log("PreOrder Traversal:- ");
        this.preOrderTraversal(this.root)
    }
}

let BST = new BinarySearchTree()
BST.main()