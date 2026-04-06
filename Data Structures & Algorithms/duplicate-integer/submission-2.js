class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set(nums);
        const arr = [...set];
        return nums.length !== arr.length
        }
}
