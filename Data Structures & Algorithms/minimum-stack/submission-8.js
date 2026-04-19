class MinStack {
    constructor() {
        this.arr = []
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.arr.push(val);
        const min = this.minStack.length === 0 ? val : Math.min(val, this.minStack.at(-1));
        this.minStack.push(min);
    }

    /**
     * @return {void}
     */
    pop() {
        const p = this.arr.pop();
        this.minStack.pop();
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
        return this.minStack.at(-1);
    }
}
