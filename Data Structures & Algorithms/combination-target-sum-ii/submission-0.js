class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort();
        const res = [];
        const dfs = (i, nums, total) => {
            if(total === target){
                res.push([...nums]);
                return;
            }
            if(i>=candidates.length || total>target) return;
            nums.push(candidates[i]);
            dfs(i+1,nums,total+candidates[i]);
            nums.pop();
            while(i + 1 < candidates.length && candidates[i] === candidates[i+1]) i++;
            dfs(i+1,nums,total);
        }
        dfs(0,[],0);
        return res;
    }
}
