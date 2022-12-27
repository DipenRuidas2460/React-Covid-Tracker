var containsDuplicate = (nums) => {
    let set = new Set()
    for(let i in nums){
        if(set.has(nums[i])) return true;
        set.add(nums[i]);
    }
    return false;
} 

console.log(containsDuplicate([1,2,3,1]));