
class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if (!grid || grid.length === 0) return 0;

        const ROWS = grid.length;
        const COLS = grid[0].length;

        let total = 0;

        const dp = Array.from(
            { length: ROWS },
            () => Array(COLS).fill(false)
        );

        const dfs = (r, c) => {
            if (
                r < 0 || c < 0 ||
                r >= ROWS || c >= COLS ||
                dp[r][c] ||
                grid[r][c] === '0'
            ) {
                return;
            }

            dp[r][c] = true;

            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === '1' && !dp[r][c]) {
                    total++;
                    dfs(r, c);
                }
            }
        }

        return total;
    }
}