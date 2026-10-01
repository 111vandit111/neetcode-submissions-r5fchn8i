class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n<1) return 0;
        const stairs = [1,2];
        if(n==1 || n ==2) return stairs[n-1];
        for(let i = 3;i <= n;i++){
            const st = stairs[i-2]+stairs[i-3];
            stairs.push(st);
        }
        return stairs[n-1];
    }
}
