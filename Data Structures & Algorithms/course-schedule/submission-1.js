class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const preMap = new Map();
        for (let i = 0; i < numCourses; i++) {
            preMap.set(i, []);
        }
        for (let [crs, pre] of prerequisites) {
            preMap.get(crs).push(pre);
        }
        const visiting = new Set();

        const dfs = (i) => {
            if(visiting.has(i)) return false;
            const list = preMap.get(i);
            if(!list.length) return true;
            visiting.add(i);
            for(let pre of list){
                if(!dfs(pre)) return false;
            }
            visiting.delete(i);
            preMap.set(i,[]);
            return true;
        }

         for (let c = 0; c < numCourses; c++) {
            if (!dfs(c)) {
                return false;
            }
        }
        return true;
    }
}
