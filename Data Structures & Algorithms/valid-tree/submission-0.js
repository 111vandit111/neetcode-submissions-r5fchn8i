class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
       if(!n) return true;

       const adj = new Map();
       for(let i = 0;i < n;i++) adj.set(i,[]);

       for(let [n1,n2] of edges){
        adj.set(n1, [...adj.get(n1) ,n2]);
        adj.set(n2, [...adj.get(n2), n1]);
       }

       const visit = new Set()

       const dfs = (i,prev) => {
        if(visit.has(i)) return false;

        visit.add(i);
        const ad = adj.get(i);

        for(const node of ad){
            if(node === prev) continue;
            if(!dfs(node,i)) return false;
        }
        return true;
       }

       return dfs(0,-1) && n === visit.size
          
    }
}
