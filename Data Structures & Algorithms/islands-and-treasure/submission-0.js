class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const ROWS = grid.length , COLS = grid[0].length;
        let visit = new Set(), q = new Queue();

        const addRooms = (r,c) => {
            if(r < 0 || c < 0 || r >= ROWS || c >= COLS || visit.has(`${r},${c}`) || grid[r][c] === -1) return;

            visit.add(`${r},${c}`);
            q.push([r,c]);
        }

        for(let i = 0;i<ROWS;i++){
            for(let j = 0; j<COLS;j++){
                if(grid[i][j] === 0){
                    q.push([i,j]);
                    visit.add(`${i},${j}`);
                }
            }
        }
        
        let dist = 0;
        while(!q.isEmpty()){
            const size = q.size();
            for(let i =0; i < size;i++){
                const [r , c] = q.pop();
                grid[r][c] = dist;
                addRooms(r+1, c);
                addRooms(r-1,c);
                addRooms(r, c+1);
                addRooms(r,c-1);
            }
            dist += 1
        }

        return grid;

    }
}
