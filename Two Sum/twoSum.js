var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var num1 = nums[i];
        for (var j = i + 1; j <= nums.length; j++) {
            if (num1 + nums[j] == target) {
                return [i, j];
            }
        }
    }
};
