class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res =0, l = 0;
        const set = new Set();

        for(let i =0;i<s.length;i++){
            if(set.has(s[i])){
                while(set.has(s[i])){
                    set.delete(s[l]);
                    l=l+1;
                }
                set.add(s[i]);
            }else{
                set.add(s[i]);
                res = Math.max(res, i-l+1);
            }
        }

        return res;
    }
}
