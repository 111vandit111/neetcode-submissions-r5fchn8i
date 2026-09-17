class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length>s2.length) return false;
        const s1Map = {};
        for(var i = 0;i<s1.length;i++){
            s1Map[s1[i]] = (s1Map[s1[i]] || 0) +1;
        }

        let start  = 0, end = s1.length-1;

        while(end < s2.length){
            const s2Map={};
            for(var i = start;i<=end;i++){
                s2Map[s2[i]] = (s2Map[s2[i]] || 0) +1;
            }
            for(var k = 0;k<s1.length;k++){
                if(s1Map[s1[k]] !== s2Map[s1[k]]){
                    start++;
                    end++;
                    break;
                };
                if(k === s1.length-1) return true;
            }
        }
        
        return false;
    }
}
