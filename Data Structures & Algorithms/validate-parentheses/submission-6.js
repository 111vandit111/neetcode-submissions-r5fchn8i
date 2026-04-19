class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const l1 = ['{','[','('];
        const l2 = [ '}',']', ')'];


        for(let i = 0;i<s.length;i++){
            if(l1.includes(s[i])){
               stack.push(s[i]);
            }else if(l2.includes(s[i])){
                const indexOf = l2.indexOf(s[i]);
                const pop = stack.pop();
                if(pop === l1[indexOf]){
                    continue;
                }else{
                   return false;
                }
            }
        }

        return !stack.length;
    }
}
