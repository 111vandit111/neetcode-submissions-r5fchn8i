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

        let isUnblanced = false;

      const countRoot = (root, len) =>{
       if(!root) return len;
       if(isUnblanced) return 0;

       const rootLeft = countRoot(root.left,len+1);
       const rootRight = countRoot(root.right,len+1);

       if(Math.abs(rootLeft - rootRight) > 1) isUnblanced = true;

       return Math.max(rootLeft,rootRight);
    }

        const le =  countRoot(root.left , 1)
        const re =  countRoot(root.right , 1)
        if (Math.abs(le - re) > 1 || isUnblanced) return false;

        return true;
    }

    
}
