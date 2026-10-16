class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const res = [];
        const cols = new Set();
        const pd = new Set(); 
        const nd = new Set();

        const backtrack = (row, board) => {
            if (row === n) {
                res.push([...board]);
                return;
            }

            for (let col = 0; col < n; col++) {
                const p = row + col;
                const d = row - col;

                if (cols.has(col) || pd.has(p) || nd.has(d)) {
                    continue;
                }
                cols.add(col);
                pd.add(p);
                nd.add(d);
                
                const rowString = ".".repeat(col) + "Q" + ".".repeat(n - col - 1);
                board.push(rowString);

                backtrack(row + 1, board);

                board.pop();
                cols.delete(col);
                pd.delete(p);
                nd.delete(d);
            }
        };

        backtrack(0, []);
        return res;
    }
}
