class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    giveValidSmall(val) {
        const charCode = val.charCodeAt(0);
        if(charCode >= 97 && charCode <= 122) return charCode - 32;
        else if (charCode >= 65 && charCode <= 90) return charCode;
        else if(charCode >= 48 && charCode <= 57) return charCode;
        else return null;
    }
    isPalindrome(s) {
        let i = 0, k = s.length-1;
        
        while(i<k){
           const val1 = this.giveValidSmall(s[i]);
           const val2 = this.giveValidSmall(s[k]);

           console.log(val1, val2)

           if(!val1) {i++; continue;}
           if(!val2) {  k--; continue;};
           if(val1 === val2){
            i++;
            k--;
            continue;
           }

           return false;
        }

        return true;
    }
}
