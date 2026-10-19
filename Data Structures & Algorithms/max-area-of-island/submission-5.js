class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const ROWS = grid.length, COLS = grid[0].length;
        let currMax = 0;

        const dfs = (r,c) => {
            if(r<0 || c<0 || r >= ROWS || c >= COLS || grid[r][c]===0) return 0;
            
            grid[r][c] = 0;
            let area = 1;
            area += dfs(r+1,c);
            area += dfs(r,c+1);
            area += dfs(r,c-1);
            area += dfs(r-1,c);
            return area;
        }

        for(let i = 0;i<ROWS;i++){
            for(let j = 0; j<COLS;j++){
                if(grid[i][j]===1) { 
                    const area = dfs(i,j);
                    currMax = Math.max(area, currMax);
                }
            }
        }

        return currMax;

    }
}
