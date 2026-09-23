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
       
        const q = [root];

        while(q.length){
            const node = q.pop();
            const left = node.left;
            const right = node.right;
            node.left = right;
            node.right = left;
            if(left) q.push(left);
            if(right) q.push(right);
        }

        return root;

    }
}
