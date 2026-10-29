class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
       const par = Array.from({ length: n }, (_, i) => i);
       const rank = Array(n).fill(1);

       const find = (node) => {
        let curr = node;
        while(curr !== par[curr]){
            par[curr]= par[par[curr]];
            curr = par[curr];
        }
        return curr;
       }

       const union = (n1,n2) => {
        let p1 = find(n1), p2 = find(n2);
        if(p1===p2) return false;
        if(rank[p2]>rank[p1]){
            [p1,p2] = [p2,p1];
        }
        par[p2] = p1;
        rank[p1] += rank[p2];
        return true;
       }

       let res = n;
       for(const [u,v] of edges){
        if(union(u,v)) res--;
       }
       return res;
    }
}
