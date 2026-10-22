class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const ROWS = board.length, COLS = board[0].length;
        const visited = new Set();

        const dfs = (r,c) => {
            if(r<0 || c < 0 || r>=ROWS || c>=COLS || visited.has(`${r},${c}`) || board[r][c]=== "X") return;

            visited.add(`${r},${c}`);
            dfs(r+1,c);
            dfs(r,c+1);
            dfs(r-1,c);
            dfs(r,c-1);
        }

        for(let i = 0;i<ROWS;i++){
            dfs(i,0);
            dfs(i,COLS-1);
        }
        for(let i = 0;i<COLS;i++){
            dfs(0,i);
            dfs(ROWS-1,i);
        }

        for(let r = 0;r<ROWS;r++){
            for(let c=0;c<COLS;c++){
                if(!visited.has(`${r},${c}`) && board[r][c]==="O") board[r][c] = "X";
            }
        }
    }
}
