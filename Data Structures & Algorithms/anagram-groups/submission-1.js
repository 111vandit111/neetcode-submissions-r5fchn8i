class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const inter = {};

        for(let i = 0;i<strs.length;i++){
            const s = strs[i].split("").sort().join("");
            if(inter[s]){
                inter[s].push(strs[i]);
            }else{
                inter[s] = [strs[i]];
            }
        }

        return Object.keys(inter).map((key) => inter[key]);
    }
}
