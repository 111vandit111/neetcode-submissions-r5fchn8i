class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        if(!nums) return [];
        const map = {}, n = nums.length,res =[];
        const lb = Math.floor(n/3)+1;
        let i = 0, j = n-1;
        while(i<=j){
            const num1 = nums[i], num2 = nums[j];
            map[num1] = (map[num1]|| 0) + 1;
            if(map[num1] === lb) res.push(num1);
            if(i<j){
            map[num2] = (map[num2]|| 0) + 1;
            if(map[num2] === lb) res.push(num2);
            }
            i++; j--;
        }

        return res;
    }
}
