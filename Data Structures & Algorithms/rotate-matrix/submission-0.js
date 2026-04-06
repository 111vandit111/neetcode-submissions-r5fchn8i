

class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */

    
    rotate(matrix) {
        const len = matrix.length;

        const swap = (mat ,i ,j,a,b) => {
            const temp = mat[i][j];
            mat[i][j] = mat[a][b];
            mat[a][b]= temp;
        }

        for(let i = 0; i < len;i++){
            for(let j = i ; j < len;j++){
                swap(matrix,i,j,j,i);
            }
        }

        for(let i = 0; i < len;i++){
            for(let j = 0 ; j < len/2;j++){
               swap(matrix, i,j,i,len-1-j);
            }
        }

        return matrix;
    }
}
