// class RecentCounter {
//     constructor() {
//         this.queue = [];
//     }

//     ping(t) {
//         if (this.queue.length === 0) {
//             this.queue.push(t);
//             return 1;
//         } else {
//             if (t <= 3000) this.queue.push(t)
//             else {
//                 let margin = t - 3000;
//                 while (this.queue.length !== 0 && this.queue[0] < margin) this.queue.shift();
//                 this.queue.push(t);
//             }
//             return this.queue.length;
//         }
//     }
// }



class RecentCounter {
    constructor() {
        this.queue = []
    }

    ping(t) {
        if (this.queue.length === 0) {
            this.queue.push(t);
            return 1;
        } else {
            if (t <= 3000) this.queue.push(t);
            else {
                let margin = t - 3000;
                while (this.queue.length != 0 && this.queue[0] < margin) {
                    this.queue.shift();
                }
                this.queue.push(t)
            }
            return this.queue.length;
        }
    };
}