class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    maxSlidingWindow(nums, k) {
        const res = [];
        let deque = [];
        
        for(let r =0 ;r<nums.length;r++){
            while(deque.length && nums[deque[deque.length-1]]<nums[r]) deque.pop();

            deque.push(r);

            let l = r-k+1;

            if(deque.length && deque[0] < l) deque.shift();

            if(l>=0) res.push(nums[deque[0]]);
        }

        return res;

    }
}
