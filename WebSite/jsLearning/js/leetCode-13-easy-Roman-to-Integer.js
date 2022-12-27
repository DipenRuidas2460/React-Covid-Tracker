var romanToInt = (s) => {
    let res = 0;
    let map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    s.split("").forEach((rNum, i) => {
        if (map[rNum] < map[s[i + 1]]) res -= map[rNum];
        else res += map[rNum];
    });
    return res;
};