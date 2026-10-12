class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];
        const subSet = [];
        const dfs = (i) => {
            const ranSet = [...subSet]
            if(nums.length <= i) {res.push(ranSet); return;}
            subSet.push(nums[i]);
            dfs(i+1);
            subSet.pop();
            dfs(i+1);
        }

        dfs(0);
        return res;
    }
}
