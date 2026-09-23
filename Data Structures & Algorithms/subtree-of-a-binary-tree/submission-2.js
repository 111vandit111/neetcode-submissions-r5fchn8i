function ser(node) {
    const result = []
    const stack = [node]

    while (stack.length > 0) {
        const node = stack.pop()
        if (!node) {
            result.push('null')
            continue
        }
        result.push(node.val)
        stack.push(node.right)
        stack.push(node.left)
    }

    return result.join(',')
}

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
    isSubtree(root, subRoot) {
        return ser(root).includes(ser(subRoot))
    }
}
