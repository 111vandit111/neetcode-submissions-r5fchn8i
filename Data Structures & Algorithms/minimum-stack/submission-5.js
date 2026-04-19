class MinStack {
    constructor() {
        this.arr = []
        this.min = Infinity;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.arr.push(val);
        this.min = Math.min(this.min, val);
    }

    /**
     * @return {void}
     */
    pop() {
        const p = this.arr.pop();
        if(p === this.min){
            let i = 0;
            let j = this.arr.length-1;

            while(i<=j){
                this.min = i=== 0 ? Math.min(this.arr[i],this.arr[j]) : Math.min(this.min,Math.min(this.arr[i],this.arr[j]));
                i++;
                j--;
            }
        }

        if(this.arr.length === 0) this.min = Infinity;
    }

    /**
     * @return {number}
     */
    top() {
        return this.arr[this.arr.length-1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min;
    }
}
