class Solution {

    
    permute(nums) {
 if (nums.length == 0) {
            return [[]];
        }

        const permutations = this.permute(nums.slice(1)),
            results = [];
        for (const permutation of permutations) {
            for (let i = 0; i <= permutation.length; i++) {
                results.push([...permutation.slice(0, i), nums[0], ...permutation.slice(i)]);
            }
        }

        return results;
    }
}
