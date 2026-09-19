class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const pMap = {
            '(' : ')',
            '{' : '}',
            '[' : ']'
        }

        for(let i = 0;i<s.length;i++){
            const curr = s[i];
            if(pMap[curr]){
                stack.push(curr);
            }else{
                const popped = stack.pop();
                if(pMap[popped] === curr) continue;
                else return false;
            }
        }

        return !stack.length;
    }
}
