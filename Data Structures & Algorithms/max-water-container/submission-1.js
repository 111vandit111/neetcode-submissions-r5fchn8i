class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0, r = heights.length-1;
        
        let area = 0;
        while(l<r){
          let curr = Math.min(heights[l],heights[r])*(r-l);

          area = Math.max(curr,area);

          if(heights[l]>heights[r]) r--;
          else l++;
        }

        return area;
    }
}
