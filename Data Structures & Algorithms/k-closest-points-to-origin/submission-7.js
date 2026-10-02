

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        if(!points.length) return [[]];
        const getDist = (point) => {
            return Math.pow( Math.pow(point[0],2)+Math.pow(point[1],2), 1/2);
        }

        const heap = new MaxPriorityQueue(x => x.dist);

        for(let i = 0;i<points.length;i++){
            const point = points[i];
            const dist = getDist(point);
            const currMax = heap.front()?.dist || 0;

            if(currMax > dist || heap.size() < k){
                if(heap.size() === k) heap.dequeue();
                heap.enqueue({value:point, dist: dist});
            }
        }
        
        return heap.toArray().map(item => item.value);

    }
}
