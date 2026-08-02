/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {                 
    if (nums.length == 0){
        return init
    }
    var value = fn(init, nums[0])
    var new_nums = nums.slice(1)
    return reduce(
        new_nums, fn, value
    )
};