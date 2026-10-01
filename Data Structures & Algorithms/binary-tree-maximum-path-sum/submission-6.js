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

        let pathMax = -Infinity;

        const dfs = (node, path) => {
            if(!node) return 0;

            const nodeLeft = Math.max(dfs(node.left, path+node.val) , 0);
            const nodeRight = Math.max(dfs(node.right, path+node.val), 0);

            pathMax = Math.max(pathMax, node.val+nodeLeft+nodeRight);

            return node.val+Math.max(nodeLeft,nodeRight);
        }

        const path = dfs(root,0);

        return Math.max(path,pathMax)
    }
    
}
