class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for(var i = 0;i<strs.length;i++){
            const currPlacement = strs[i].split("").sort().join("");
            if(map[currPlacement]){
                map[currPlacement] = [...map[currPlacement],strs[i]];
            }
            else{
                map[currPlacement] = [strs[i]];
            }
        }

        console.log(map);

        return Object.values(map);
    }
}