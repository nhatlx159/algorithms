
var twoSum = function(nums: Array<number>, target: number) {
    for(let i=0; i<nums.length; i++){
        const num1 = nums[i]
        for(let j=i+1; j <= nums.length; j++){
            if(num1+nums[j] == target){
                return [i, j]
            }
        }
    }
};


