class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let i = 1, j = Math.max(...piles);
        let currMax = j;

        while(i<=j){
            let totalTime = 0;
            let k = Math.floor((j+i)/2);

            let first = 0, last = piles.length-1;

            while(first<=last){
                totalTime += first !== last ? Math.ceil(piles[first]/k)+Math.ceil(piles[last]/k) : Math.ceil(piles[last]/k);
                first++;last--;
            }

            if(totalTime > h) i = k+1;
            else {
            j = k-1; 
            currMax = k;
            }
        }

        return currMax;
    }
}
