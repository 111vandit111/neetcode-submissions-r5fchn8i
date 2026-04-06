class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}
        const freq = [];
        for(let i = 0;i<nums.length +1;i++) freq[i] = [];
        Object.values(nums).map((n) => {
            count[n] = (count[n] || 0) + 1;
        })
        Object.keys(count).map((item) => {
          freq[count[item]].push(item);
        }) 
        const res = [];
        let index = 0;
        for(let i = freq.length -1;i>0 && index < k; i--){
            Object.values(freq[i]).map((n) => {
                res[index] = n;
                index = index+1;
                if(index == k) return res;
            })
        }
        return res;
    }
}
