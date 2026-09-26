/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (!p && !q) return true; // both null

        if (!p && q !== null) return false; // 1 null
        if (!q && p !== null) return false; // 1 null

        if (p.val !== q.val) return false; // unequal
        
        // DONE: check if left or right is null i guess ... 
        
        const leftIsSame = this.isSameTree(p.left, q.left);
        const rightIsSame = this.isSameTree(p.right, q.right);
        
        return leftIsSame && rightIsSame;
        // return true;
    }
}
