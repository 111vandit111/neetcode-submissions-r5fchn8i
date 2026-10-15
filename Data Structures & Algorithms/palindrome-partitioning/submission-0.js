class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    
    partition(s) {
        const checkPalindrome = (arr) => {
            let i = 0, l=arr.length-1;
            while(i<=l){
                if(arr[i] === arr[l]){
                    i++; l--;
                    continue;
                }
                return false;
            }
            return true;
        }

        const sArr = s.split("");
        const res = [];
        const dfs = (i, curr) => {
            if(i>=sArr.length){
                res.push([...curr]);
                return;
            }
            
            for(let j = i; j<sArr.length;j++){
                if(checkPalindrome(sArr.slice(i,j+1))){
                    curr.push(sArr.slice(i,j+1).join(""));
                    dfs(j+1, curr);
                    curr.pop()
                }
            }
        }

        dfs(0,[]);
        return res;
        
    }
}
