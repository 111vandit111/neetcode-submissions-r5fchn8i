class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
         const prereq = new Map();
        for (const [course, pre] of prerequisites) {
            if (!prereq.has(course)) {
                prereq.set(course, []);
            }
            prereq.get(course).push(pre);
        }

        const output = [];
        const visit = new Set();
        const cycle = new Set();

        const dfs = (course) => {
            if(cycle.has(course)) return false;
            if(visit.has(course)) return true;

            cycle.add(course);
            for(const pre of (prereq.get(course) || [])){
                if(!dfs(pre)) return false
            }
            visit.add(course);
            cycle.delete(course);
            output.push(course);
            return true;
        }


        for (let c = 0; c < numCourses; c++) {
            if (!dfs(c)) {
                return [];
            }
        }

        return output;
    }
}
