class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        var first = 0;
        var last = heights.length-1;
        var area = 0;
        while(first < last){
          const newarea = Math.min(heights[first], heights[last])*(last-first);
          
          area = Math.max(area,newarea);
          if(heights[first]>heights[last]) last--;
          else first++;
        }
        return area;
    }
}
