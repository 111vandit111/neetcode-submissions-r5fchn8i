class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A1 = nums1 , A2 = nums2;
        if(A2.length < A1.length){
            [A1, A2] = [A2, A1];
        }
        let l=0, r=A1.length;
        let half = Math.floor((r+A2.length+1)/2);

        while(l<=r){
            const partA = Math.floor((r+l)/2);
            const partB = half-partA;

            const Aleft = partA === 0 ? -Infinity : A1[partA - 1];

const Aright =
    partA === A1.length ? Infinity : A1[partA];

const Bleft =
    partB === 0 ? -Infinity : A2[partB - 1];

const Bright =
    partB === A2.length ? Infinity : A2[partB];

            if(Aleft <= Bright && Bleft <= Aright){
                if((nums1.length+nums2.length)%2 === 0){
                    return (Math.max(Aleft,Bleft)+Math.min(Aright,Bright))/2
                }else{
                   return Math.max(Aleft,Bleft);
                }
            }else if(Aleft > Bright) r = partA -1;
            else l = partA+1
        }

        return -1;
    }
}
