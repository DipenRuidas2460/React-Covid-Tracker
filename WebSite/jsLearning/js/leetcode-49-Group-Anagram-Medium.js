var groupAnagrams = (strs) => {
    let sorted = strs.map((str) => str.split("").sort().join(""));
    let hash = {};
    for (let i = 0; i < strs.length; i++) {
        if (!hash[sorted[i]]) hash[sorted[i]] = [strs[i]];
        else hash[sorted[i]].push(strs[i]);
    }
    return Object.values(hash);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// T.c = O(n * nlogn), s.c = O(n)
// sorted array = [ 'aet', 'aet', 'ant', 'aet', 'ant', 'abt' ]
// hash = { aet: [ 'eat', 'tea', 'ate' ], ant: [ 'tan', 'nat' ], abt: [ 'bat' ] }