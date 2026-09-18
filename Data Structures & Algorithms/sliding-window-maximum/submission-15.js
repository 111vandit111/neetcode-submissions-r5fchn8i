class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    getCurrentMax(nums, start,end){
      let currMax = nums[start];
      start++;
      while(start <= end){
         const max = Math.max(nums[start], nums[end]);
         currMax = Math.max(currMax,max);
         start++; end--;
      }
      return currMax;
    }

    maxSlidingWindow(nums, k) {
        const res = [];
        let start = 0;
        let maxWindow = Math.min(k,nums.length)-1;
        let currMax = this.getCurrentMax(nums,0,maxWindow);

        while(maxWindow < nums.length){
            res.push(currMax);
            start++;
            maxWindow++;
            const newAdd = nums[maxWindow];
            if(newAdd > currMax){
                currMax = newAdd;
            }else{
                if(currMax > newAdd){
                    if(currMax === nums[start-1]){
                        currMax = this.getCurrentMax(nums,start,maxWindow);
                    }
                }
            }
        }

        return res;
    }
}
