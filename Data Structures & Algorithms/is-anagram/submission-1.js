class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let mapper = [];
        const charValofA = "a".charCodeAt(0);
        for(var k = 0;k<=26;k++) mapper[k] = 0;

        console.log(mapper);
        

        for(var i =0;i<t.length;i++){
            mapper[s.charCodeAt(i)-charValofA] = mapper[s.charCodeAt(i)-charValofA]-1;
            mapper[t.charCodeAt(i)-charValofA] = mapper[t.charCodeAt(i)-charValofA]+1;
        }

        for(var i =0;i<26;i++){
            if(mapper[i] !== 0) return false;
        }

        return true;
    }
}
