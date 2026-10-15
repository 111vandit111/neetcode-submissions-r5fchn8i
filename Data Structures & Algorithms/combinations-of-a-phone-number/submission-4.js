class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const res = []
        if (digits === "") return res;
        const letters = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz",
        };

        function dfs(i, cur) {
            if (cur.length >= digits.length) {
                res.push(cur);
                return;
            }

            for (let j = 0; j < letters[digits[i]].length; j++) {
                cur += letters[digits[i]][j];
                dfs(i + 1, cur);
                cur = cur.slice(0, -1);
            }
        }
        dfs(0, "");
        return res;
    }
}
