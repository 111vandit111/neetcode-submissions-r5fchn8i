class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0 , r = 1 , p = 0;

        while(r<prices.length){
            if(prices[l]<prices[r]){
                const curr = -prices[l]+prices[r];
                p = Math.max(p,curr);
            }else l =r;
            r++;
        }

        return p;
    }
}
