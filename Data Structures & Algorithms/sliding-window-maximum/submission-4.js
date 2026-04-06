class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const res = [];
        for(let i = 0;i < nums.length - k + 1;i++){
            const currArr = nums.slice(i,i+k);
            currArr.sort((a,b) => a - b);
            console.log(currArr,k);
            res.push(currArr[k-1]);
        }
        return res;
    }
}
