class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {};
        const finalAns = [];
        for(var i =0;i<nums.length;i++){
            const x = nums[i];
            if(map[target - x]){
                finalAns.push(i);
                finalAns.push(map[target - x]-1);
                return finalAns;
            }

            map = {...map, [x]:i+1};
        }
        return finalAns;
    }
}
