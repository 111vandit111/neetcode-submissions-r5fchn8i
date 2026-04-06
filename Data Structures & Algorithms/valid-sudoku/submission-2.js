class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const cols = {};
        const rows = {};
        const squares = {};

        for(var r = 0 ;r<9;r++){
            for(var c = 0 ;c<9;c++){
                var cell = board[r][c];
                if(cell === ".") continue;

                const sqVal = Math.floor(Math.floor(r/3)*3+Math.floor(c/3))

                if(rows[r]?.[cell] || cols[c]?.[cell] || squares[sqVal]?.[cell]) {
                    
        console.log({squares});
                    return false;}

                cols[c] = cols[c] ? {...cols[c], [cell] : true} : { [cell] : true };
                rows[r] = rows[r] ? {...rows[r], [cell] : true} : { [cell] : true };
                squares[sqVal] = squares[sqVal] ? { ...squares[sqVal] , [cell] : true } : { [cell] : true }
            }
        }

        return true;
    }
}
