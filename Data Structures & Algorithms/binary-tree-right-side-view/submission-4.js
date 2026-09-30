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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];
        let res = [], q = [root];

        while(q.length){
            const items = q.length;
            for(let i =0;i<items;i++){
                const node = q.shift();
                if(i===0) res.push(node.val);
                if(node.right) q.push(node.right);
                if(node.left) q.push(node.left);
            }
        }

        return res;
    }
}
