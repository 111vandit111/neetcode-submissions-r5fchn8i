/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const oldToNew = new Map();

        const dfs = (node) => {
            if (!node) return null;

            if(oldToNew.has(node)) return oldToNew.get(node);

            const newNode = new Node();
            newNode.val = node.val;

            oldToNew.set(node,newNode)

            for(const negs of node.neighbors) newNode.neighbors.push(dfs(negs));

            return newNode;
        }

        return  dfs(node);

    }
}
