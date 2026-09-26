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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return []
        const res = [];
        let stack = [root];
        while(stack.length){
            const vals = [];
            const temp = [...stack];
            stack=[];
            while(temp.length){
                const poped = temp.shift();
                vals.push(poped.val);
                if(poped.left) stack.push(poped.left);
                if(poped.right) stack.push(poped.right);
            }
            res.push(vals);
        }

        return res;
    }
}
