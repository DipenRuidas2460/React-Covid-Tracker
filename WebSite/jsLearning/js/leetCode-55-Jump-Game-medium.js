var canJump = (nums) => {
    let reach = 0
    for (let i = 0; i < nums.length; i++) {
        if (reach < i) return false;
        reach = Math.max(reach, i + nums[i]);
    }
    return true;
}

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));