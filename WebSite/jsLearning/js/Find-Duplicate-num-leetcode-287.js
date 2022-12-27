var findDuplicate = function (nums) {
    let fast = 0
    let slow = 0
    while (true) {
        fast = nums[nums[fast]]
        slow = nums[slow]
        if (fast === slow) {
            let pointer = 0
            while (pointer !== slow) {
                pointer = nums[pointer]
                slow = nums[slow]
            }
            return pointer;
        }
    }
};

console.log(findDuplicate([3, 1, 3, 4, 2]));



var findDuplicate1 = function (nums) {
    // using map
    let map = new Map()
    for (let i of nums) map.set(i, (map.get(i) || 0) + 1);
    for (let j of map) if (j[1] > 1) return j[0];

    // using object
    
    // let obj = {}
    // for (let i of nums) obj[i] = (obj[i] || 0) + 1;
    // for (let j in obj) if (obj[j] > 1) return j;
}

console.log(findDuplicate1([3, 1, 3, 4, 2]));