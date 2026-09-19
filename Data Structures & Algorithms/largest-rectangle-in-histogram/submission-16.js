class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = []
        let maxArea = 0

       for(let i = 0;i<heights.length;i++){
        const curr = heights[i];
        let idx = i;
         while(stack.length && stack.at(-1)[0] > curr){
            const [val ,index] = stack.pop();
            maxArea = Math.max(maxArea, val*(i-index));
            idx = index;
         }
         stack.push([curr,idx]);
       }

       for(const [val, i] of stack) {
            maxArea = Math.max(maxArea, val*(heights.length-i));
        }

       return maxArea;
    }
}
