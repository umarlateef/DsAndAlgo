var removeDuplicates = function(nums) {
    let uniqueElementsIndex = 0;
    for(let index=1; index<nums.length; index++){
        if(nums[uniqueElementsIndex] !== nums[index]){
            nums[++uniqueElementsIndex] = nums[index];
        }
    }
    return uniqueElementsIndex+1;
};
