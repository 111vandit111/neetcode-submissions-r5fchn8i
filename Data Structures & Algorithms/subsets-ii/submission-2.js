class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort();
        const res = [];
        const subSet = [];
        const dfs = (i) => {
            const ranSet = [...subSet]
            if(nums.length <= i) {res.push(ranSet); return;}
            subSet.push(nums[i]);
            dfs(i+1);
            subSet.pop();

            while(nums.length > i+1 && nums[i]===nums[i+1]) i=i+1;
            dfs(i+1)
        }

        dfs(0);
        return res;
    }
}
