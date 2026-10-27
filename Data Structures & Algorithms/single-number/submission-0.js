class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let res = 0;
        for(const i of nums) res = res^i;
        return res;
    }
}
