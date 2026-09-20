class Solution {

    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */

    findTotalHours(piles,count){
        let ans = 0;
        let i =0, j = piles.length-1;
        while(i<=j){
            const t1 = Math.ceil(piles[i]/count);
            const t2 = i === j ? 0 : Math.ceil(piles[j]/count);
            ans = ans + t1 + t2;
            i++,j--;
        }
        return ans;
    }

    minEatingSpeed(piles, h) {
        let i = 1, j = Math.max(...piles);
        let currMax = j;

        while(i<=j){
           const mid = Math.floor((i+j)/2);

           const calc = this.findTotalHours(piles,mid);

           if(calc > h){
             i = mid+1
           }else{
            j = mid-1;
            currMax = mid;
           }
        }

        return currMax;
    }
}
