class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0 , right = height.length-1, res = 0, rightMax = height[right],leftMax = height[left];

        while(left < right){
            if(rightMax < leftMax){
                right--;
                rightMax = Math.max(rightMax, height[right]);
                res += rightMax - height[right]
            }else{
                left++;
                leftMax = Math.max(leftMax,height[left]);
                res+=leftMax - height[left];
            }
        }

        return res;
    }
}
