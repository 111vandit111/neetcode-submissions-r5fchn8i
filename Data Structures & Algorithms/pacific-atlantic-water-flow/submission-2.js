class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const ROWS = heights.length, COLS = heights[0].length;
        const pac = new Set(), atl = new Set();

        const dfs = (r, c, visit, lastHeight) => {
            if(r < 0 || c < 0 || r > ROWS-1 || c > COLS-1  || visit.has(`${r},${c}`) || lastHeight > heights[r][c]) return;

            visit.add(`${r},${c}`);
            dfs(r-1, c, visit, heights[r][c]);
            dfs(r+1, c, visit, heights[r][c]);
            dfs(r, c-1, visit, heights[r][c]);
            dfs(r, c+1, visit, heights[r][c]);
        }

        for(let i = 0;i<COLS;i++){
            dfs(0,i,pac,-1);
            dfs(ROWS-1,i,atl,-1);
        }
        for(let i = 0;i<ROWS;i++){
            dfs(i,0,pac,heights[i][0]);
            dfs(i,COLS-1,atl,heights[i][COLS-1]);
        }

        const res = [];

        for(let r = 0;r<ROWS;r++){
            for(let c = 0;c<COLS;c++){
                if(pac.has(`${r},${c}`) && atl.has(`${r},${c}`)) res.push([r,c]);
            }
        }

        return res;
    }
}
