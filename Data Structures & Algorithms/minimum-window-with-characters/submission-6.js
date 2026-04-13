class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const tMap = {}, window = {};
        if(t.length === 0 || s.length === 0 ) return "";
        for(let i = 0;i<t.length;i++){
            tMap[t[i]] = (tMap[t[i]] || 0) + 1;
        }

        let res = [], resLen = 1111111;

        let left = 0, count = 0;
        let requiredCount = Object.keys(tMap).length;

        for(let right = 0; right < s.length; right++){
            let c = s[right];
            window[c] = (window[c] || 0) + 1;
            if(tMap[c] && tMap[c] === window[c]){
               count++;
            }
            while(count === requiredCount){
                if((right - left + 1) < resLen){
                    res = [left,right];
                    resLen = right - left + 1;
                }
                window[s[left]] -= 1;
                if(tMap[s[left]] && tMap[s[left]] > window[s[left]]){
                    count -= 1;
                }
                left += 1;
            }
        }


        if (resLen === 1111111) return "";
        return s.slice(res[0],res[1]+1);
    }
}
