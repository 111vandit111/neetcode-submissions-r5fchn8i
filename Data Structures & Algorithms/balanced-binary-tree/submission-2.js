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
     * @return {boolean}
     */
    isBalanced(root) {
        if(!root ) return true;

        const le =  this.countRoot(root.left , 1)
        const re =  this.countRoot(root.right , 1)
        if (Math.abs(le - re) > 1) return false;

        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }

    countRoot(root, len){
       if(!root) return len;

       const rootLeft = this.countRoot(root.left,len+1);
       const rootRight = this.countRoot(root.right,len+1);

       return Math.max(rootLeft,rootRight);
    }
}
