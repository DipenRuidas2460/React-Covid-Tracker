class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

// For priority Queue Implement 

class QElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        let qElement = new QElement(element, priority);
        let contain = false;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }

        if (!contain) this.items.push(qElement);
    }

    dequeue() {
        if (this.isEmpty()) return "Underflow";
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) return "No element in Queue";
        return this.items[0];
    }

    rear() {
        if (this.isEmpty()) return "No element in Queue";
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printPQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i].element + " ";
        }
        return str;
    }
}

class Queue {
    constructor() {
        this.front = null
        this.rear = null
        // this.maxSize = 6
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

let pq = new PriorityQueue();


class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    addVertex(v) {
        if (!this.AdjList.get(v)) { this.AdjList.set(v, []); }
    }

    addEdge(v1, v2, weight) {   // weight - w, vertexs- v1,v2
        // get list for vertexs v
        // vertexs w denoting edges between v and w
        this.AdjList.get(v1).push({ target: v2, wt: weight });
        // since graph is undirected.
        // add an edges w to v also
        // this.AdjList.get(v2).push({ target: v1, wt :weight });
        // if (direction === 0) { this.AdjList.get(w).push(v); }
    }

    bfs(startingNode, visited = {}) {
        let q = new Queue();
        visited[startingNode] = true;
        q.enqueue(startingNode);
        while (!q.isEmpty()) {
            let getQueueEle = q.remove();
            console.log(getQueueEle);
            let get_list = this.AdjList.get(getQueueEle);
            for (let i in get_list) {
                let neigh = get_list[i];
                if (!visited[neigh]) {
                    visited[neigh] = true;
                    q.enqueue(neigh);
                }
            }
        }
    }

    bft() {    // Traverse disconnected Graph - by bfs
        let visited = {}
        let dis_conn_count = 0
        for (let key of this.AdjList.keys()) {
            if (!visited[key]) {
                dis_conn_count++;
                this.bfs(key, visited)
            }
        }
        console.log("DisConnected component:- ", dis_conn_count);
    }

    dfs(vertex, visited = {}) {
        visited[vertex] = true;
        console.log(vertex);
        for (let i of this.AdjList.get(vertex)) {
            if (!visited[i]) this.dfs(i, visited);
        }
    }


    dft() {    // Traverse disconnected Graph - by dfs
        let visited = {}
        let dis_conn_count = 0
        for (let key of this.AdjList.keys()) {
            if (!visited[key]) {
                dis_conn_count++;
                this.dfs(key, visited)
            }
        }
        console.log("DisConnected component:- ", dis_conn_count);
    }

    Dijkstra(source = 'A') {
        let dist = {};
        for (let i of this.AdjList.keys()) {
            dist[i] = Infinity;
        }

        dist[source] = 0;
        // lesser number more priority
        pq.enqueue(source, 0);

        while (!pq.isEmpty()) {
            let start = pq.front().element; // return minimum distance
            pq.dequeue()
            let sourceAdj = this.AdjList.get(start);
            for (let curr of sourceAdj) {
                if (dist[curr.target] > dist[start] + curr.wt) {
                    dist[curr.target] = dist[start] + curr.wt;
                    pq.enqueue(curr.target, dist[curr.target]);
                }
            }
        }
        return dist;
    }

    printGraph() {
        let keys = this.AdjList.keys()
        for (let i of keys) {
            console.log(i, '->', this.AdjList.get(i));
        }
    }

    // printGraph() {
    //     // get all vetices
    //     let get_keys = this.AdjList.keys();
    //     // iterator over vertices
    //     for (let i of get_keys) {
    //         let get_values = this.AdjList.get(i);
    //         let conc = "";
    //         // concatinate the value into a string
    //         for (let j of get_values) { conc += j + " " }
    //         // print the all vertices
    //         console.log(i + " -> " + conc);
    //     }
    // }

    main() {
        let vertices = ['A', 'B', 'C', 'D', 'E'];
        for (let i = 0; i < vertices.length; i++) { this.addVertex(vertices[i]) }
        this.addEdge('A', 'B', 4);
        this.addEdge('A', 'C', 1);
        this.addEdge('B', 'E', 4);
        this.addEdge('C', 'B', 2);
        this.addEdge('C', 'D', 4);
        this.addEdge('D', 'E', 4);
        console.log("Graph is presenting by Adjacent List:- ");
        this.printGraph()
        console.log(this.Dijkstra())
        // this.bft()
        // console.log("Bfs:-");
        // this.bfs('A')
        // console.log("Dfs:-");
        // this.dfs('A')
    }
}

let g = new Graph(5);
g.main()
