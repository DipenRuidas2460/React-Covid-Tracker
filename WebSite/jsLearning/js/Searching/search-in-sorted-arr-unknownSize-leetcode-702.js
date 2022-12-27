var search = (reader, target) => {
    let l = 0
    let r = 1
    while (reader[r] < target) {
        l = r
        r *= 2;
    }
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (reader[m] === target) return m;
        if (reader[l] < target && target < reader[m]) r = m - 1;
        else l = m + 1;
    }
    return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9));