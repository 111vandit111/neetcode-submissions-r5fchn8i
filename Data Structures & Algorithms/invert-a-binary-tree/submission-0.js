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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root) return root;

        const leftTree = this.invertTree(root.right);
        const rightTree = this.invertTree(root.left);

        const newTreeNode = new TreeNode(root.val, leftTree, rightTree);
        return newTreeNode;
    }
}
