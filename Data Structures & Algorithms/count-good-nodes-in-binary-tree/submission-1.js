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
    goodNodes(root) {
        if(!root) return 0;
        let count = 0;
        const dfs = (node, max) => {
            if(!node) return;
            if(node.val>=max) count++;
            dfs(node.right, Math.max(node.val,max));
            dfs(node.left, Math.max(node.val,max));
        }
        dfs(root,root.val);
        return count;
    }
}
