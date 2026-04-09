class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = [];
        nums.sort((a,b)=>a-b);
        for(var i = 0;i<nums.length;i++){
            const curr = nums[i];
            if(curr > 0) break;

            if(i>0 && curr=== nums[i-1]) continue;

            let l = i+1, r = nums.length -1;

            while(l < r){
                let sum = curr + nums[l]+nums[r];

                if(sum > 0){
                    r--;
                }else if(sum < 0) l++;
                else{
                    res.push([curr,nums[l],nums[r]]);
                    l++;

                    while(nums[l] === nums[l-1] && l < r) l++;
                }
            }
        }

        return res;
    }
}
