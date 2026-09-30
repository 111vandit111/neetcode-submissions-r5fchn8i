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
            if(heap.front() < num || heap.size() < k){
                if(heap.size() === k) heap.dequeue();
                heap.enqueue(num);
            }
        }

        return heap.dequeue();

    }
}
