class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
         const res = [];
        const sub = [];

        const dfs = (i, currSum) => {
            if (currSum === target) {
                res.push([...sub]);
                return;
            }

            if (i === nums.length || currSum > target) {
                return;
            }
            sub.push(nums[i]);
            dfs(i, currSum + nums[i]);
            sub.pop();
            dfs(i + 1, currSum);
        };

        dfs(0, 0);
        return res;
    }
}
