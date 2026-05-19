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

        if (!root) return root;
        let q = [root];
        while (q.length > 0) {
            let newQ = [];
            while (q.length > 0) {
                const node = q.pop();
                let left = node.left;
                let right = node.right;
                node.right = left;
                node.left = right;
                if (left) {
                    newQ.push(left);
                }

                if (right) {
                    newQ.push(right);
                }
            }

            q = newQ;
        }

        return root;
    }
}
