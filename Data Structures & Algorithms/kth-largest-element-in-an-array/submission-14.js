class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const heap = new MinPriorityQueue();

        for(let i =0;i<nums.length;i++){
            const num = nums[i];
            heap.enqueue(num);
            if(heap.size() === k+1) heap.dequeue();
        }

        return heap.front();

    }
}
