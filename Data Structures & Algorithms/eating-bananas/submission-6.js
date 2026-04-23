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

            for (const p of piles) {
                totalTime += Math.ceil(p / k);
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
