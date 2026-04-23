class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        if(!heights.length) return 0;
        const stack = [[ heights[0], 0 ]];
        let max = heights[0];

        for(let i = 1; i < heights.length; i++){
            let lastInt = stack[stack.length-1];
            let lastInd = i;
            const curr = heights[i];
            while(lastInt?.[0] >= curr && stack.length){
                lastInt = stack.pop();
                max = Math.max((i-lastInt[1])*lastInt[0], max);
                lastInd = lastInt[1];
                lastInt = stack[stack.length-1];
            }
            stack.push([ curr, lastInd ])
        }

        while(stack.length){
            const maxL = heights.length;
            const f = stack.pop();
            max = Math.max((maxL-f[1])*f[0], max);
        }

        return max;
    }
}
