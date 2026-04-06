class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let index1 =0, index2=0;
        if(target < matrix[index1][index2]) return false;
        while(index1<matrix.length && index2 < matrix[0].length){
           const curr = matrix[index1][index2];
           if(curr === target) return true;
           const nextRow = matrix[index1+1]?.[index2];
           const nextCol = matrix[index1]?.[index2+1];

           if(nextRow <= target){
            index1 += 1;
           }else if(nextCol <= target){
            index2 += 1;
           }else{
            return false;
           }
        }
        return false;
    }
}
