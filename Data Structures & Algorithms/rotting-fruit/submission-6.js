class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const ROWS = grid.length, COLS = grid[0].length;
        let visited = new Set(), q = [], has1 = 0;

        const rottenFinder = (r,c) => {
            if(r < 0 || c < 0 || r > ROWS-1 ||c > COLS-1 || visited.has(`${r},${c}`) || grid[r][c] === 0) return false;

            visited.add(`${r},${c}`);
            q.push([r,c]);
            has1--;
        }

        let dist = 0;

        for(let i = 0;i<ROWS;i++){
            for(let j = 0;j<COLS;j++){
                if(grid[i][j] === 2){
                    q.push([i,j]);
                    visited.add(`${i},${j}`);
                }
                if(grid[i][j] === 1) has1++;
            }
        }

        while(q.length && has1 > 0){
            const size = q.length;
            for(let i = 0;i<size;i++){
                const [r,c] = q.shift();
                rottenFinder(r+1,c);
                rottenFinder(r-1,c);
                rottenFinder(r,c+1);
                rottenFinder(r,c-1);
            }
            dist = dist+1;
        }

        return has1 === 0 ? dist : -1;
    }
}
