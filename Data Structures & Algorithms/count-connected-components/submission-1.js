class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const visited = new Set();
        const adj = new Map();
        const dfs = (node) => {
            if(visited.has(node)) return;
            visited.add(node);
            const list = adj.get(node) || [];
            for(let i =0;i<list.length;i++) dfs(list[i]);
        }
        for(let i =0;i<edges.length;i++){
            const [n1,n2] = edges[i];
            const list = adj.get(n1) || [];
            list.push(n2);
            const list2 = adj.get(n2) || [];
            list2.push(n1)
            adj.set(n1,list);
            adj.set(n2,list2);
        }
        let count = 0;
        for(let i =0;i<n;i++){
            if(!visited.has(i)){
                count++;
                dfs(i);
            }
        }
        return count;
    }
}
