var jump = (nums) => {
    let reach = 0, newMax = 0, oldMax = 0
    for (let i = 0; i < nums.length - 1; i++) {
        newMax = Math.max(newMax, i + nums[i]);
        if (i === oldMax) {
            reach++;
            oldMax = newMax
        }
    }
    return reach;
}