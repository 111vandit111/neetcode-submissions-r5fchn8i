class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = {};
        let l =0, res =0,maxF =0;

        for(let i = 0; i<s.length;i++){
            count[s[i]] = (count[s[i]] || 0) + 1;
            maxF = Math.max(count[s[i]], maxF);

            if(i-l+1-maxF > k){
                count[s[l]] = count[s[l]] - 1;
                l = l +1;
            }

            res = Math.max(i-l+1,res);
        }

        return res;
    }
}
