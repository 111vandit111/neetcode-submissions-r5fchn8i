class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */

    getEelemtFromMat(mat,cols,curr){
        const idxRow =Math.floor(curr/cols);
        const idxCol = curr%cols;

        return mat[idxRow][idxCol];
    }

    searchMatrix(matrix, target) {
        const ROWS = matrix.length, COLS = matrix[0].length;
        const SIZE_OF_ARRAY =  ROWS*COLS;
        let start = 0, end = SIZE_OF_ARRAY-1;
        while(start <= end && end <= SIZE_OF_ARRAY){
           const CURR = Math.floor((end+start)/2);
           const currElement = this.getEelemtFromMat(matrix,COLS,CURR);
           if(currElement === target) return true;
           if (currElement > target) {
                end = CURR - 1;
            } else {
                start = CURR + 1;
            }
        }

        return false;
    }
}
