class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
       let heap = new MaxPriorityQueue();
       for (const stone of stones) {
            heap.enqueue(stone);
        }
       while (heap.size() > 1) {
            const stone1 = heap.dequeue();
            const stone2 = heap.dequeue();

            if (stone1 !== stone2) {
                heap.enqueue(stone1 - stone2);
            }
        }
        return heap.size() === 1 ? heap.dequeue() : 0;
    }
}
