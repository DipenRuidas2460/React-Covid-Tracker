var merge = (intervals) => {
    intervals.sort((a, b) => (a[0] - b[0]));
    let ans = [intervals[0]];
    for (let interval of intervals) {
        let e1 = ans[ans.length - 1][1]
        let s2 = interval[0]
        let e2 = interval[1]
        if (e1 >= s2) ans[ans.length - 1][1] = Math.max(e1, e2);
        else ans.push(interval);
    }
    return ans;
}

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));