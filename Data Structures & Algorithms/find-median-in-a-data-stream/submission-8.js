class MedianFinder {
    constructor() {
        this.maxHeap = new PriorityQueue((a,b) => b-a);
        this.minHeap = new PriorityQueue((a,b) => a-b);
        this.count = 0;
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if(this.minHeap.isEmpty() || num > this.minHeap.front()){
            this.minHeap.enqueue(num)
        }else this.maxHeap.enqueue(num);

        if(this.minHeap.size() > this.maxHeap.size()+1){
        this.maxHeap.enqueue(this.minHeap.dequeue());
        }else if(this.minHeap.size()+1 < this.maxHeap.size()) {
            this.minHeap.enqueue(this.maxHeap.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if(this.minHeap.size() < this.maxHeap.size()){
            return this.maxHeap.front();
        }else if (this.maxHeap.size() < this.minHeap.size()){
            return this.minHeap.front();
        }else{
return (this.maxHeap.front() + this.minHeap.front()) / 2.0;
        }
    }
}
