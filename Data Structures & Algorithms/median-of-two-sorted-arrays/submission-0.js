class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const l1 = nums1.length, l2 = nums2.length;
        let med1 = 0, med2 = 0;
        let i = 0, j =0;

        for(let count = 0; count <  Math.floor((l1 + l2) / 2) + 1; count++){
            med2 = med1;
            if(i<l1 && j < l2){
                if(nums1[i] < nums2[j]){
                    med1 = nums1[i];
                    i++;
                }else{
                    med1 = nums2[j];
                    j++;
                }
            }else if(i<l1){
                med1 = nums1[i];
                i++;
            }else{
                med1 = nums2[j];
                j++;
            }
        }

        if((l1+l2)%2 === 1){
            return med1;
        }else{
            return (med1+med2)/2.0;
        }
    }
}
