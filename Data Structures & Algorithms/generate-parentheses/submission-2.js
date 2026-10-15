class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];
        const dfs = (curr,op,cl) => {
            if (curr.length === 2 * n) {
                res.push(curr.join(""));
                return;
            }

            if(op < n){
                dfs([...curr, "("], op+1, cl);
            }
            if(cl < op){
                dfs([...curr,")"],op, cl+1);
            }
        }

        dfs([],0,0);
        return res;
    }
}
