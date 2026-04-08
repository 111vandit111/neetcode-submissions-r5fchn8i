class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if(prices.length < 2) return 0;
        let lowest = prices[0], maxProfit = 0;
       
        for(let i =1 ;i<prices.length;i++){
            maxProfit = Math.max(prices[i]-lowest, maxProfit);
            lowest = Math.min(lowest,prices[i]);
        }

        return maxProfit;

    }
}
