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
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        if(!root) return 0;

        let subTreeMax = -Infinity;

        const getPath = (root) => {
        if(!root) return 0;

        let leftSubtree = getPath(root.left, subTreeMax);
        let rightSubtree = getPath(root.right, subTreeMax);

        subTreeMax = Math.max(root.val + Math.max(leftSubtree, 0) +     Math.max(rightSubtree,0) , subTreeMax);
        return root.val + Math.max(Math.max(leftSubtree , 0), Math.max(rightSubtree,0));
    }

        const path = getPath(root,subTreeMax);
        
        return Math.max(subTreeMax, path);
    }
    
}
