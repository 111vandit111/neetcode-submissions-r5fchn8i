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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSameTree(t1, t2) {
        if (t1 === null && t2 === null) return true;
        if (t1 === null || t2 === null) return false;
        return (
            t1.val === t2.val &&
            this.isSameTree(t1.left, t2.left) &&
            this.isSameTree(t1.right, t2.right)
        );
    }

    isSubtree(root, subRoot) {
        if (subRoot === null) return true;
        if (root === null) return false;

        const els = [root];

        while (els.length) {
            const el = els.pop();
            if (this.isSameTree(el, subRoot)) return true;
            if (el.left) els.push(el.left);
            if (el.right) els.push(el.right);
        }

        return false;
    }
}
