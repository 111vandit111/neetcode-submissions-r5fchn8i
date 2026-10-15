class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(!digits.length) return [];
        const list = {
            2 : ["a","b","c"],
            3 : ["d","e","f"],
            4 : ["g","h","i"],
            5 : ["j","k","l"],
            6 : ["m","n","o"],
            7 : ["p","q","r","s"],
            8 : ["t","u","v"],
            9 : ["w","x","y","z"]
        }

        const res = [];


        const dfs = (i, curr) => {
           if(curr.length === digits.length) {res.push([...curr].join("")); return;}
           if(i>=digits.length) return;
           const chars = list[digits[i]];
           for(let j = 0;j<chars.length;j++){
              dfs(i+1,[...curr,chars[j]]);
           }
        }

        dfs(0,[])

        return res;
    }
}
