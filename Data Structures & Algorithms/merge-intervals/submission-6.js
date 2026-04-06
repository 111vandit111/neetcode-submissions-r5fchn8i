class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        let ans = [];
        intervals.sort((a,b)=> a[0] - b[0]);
        for(let i = 0;i<intervals.length;i++){
          let startInt = intervals[i][0];
          let endInt = intervals[i][1];
          let j = i;
          let k = true;
          while(k){
            j = j+1;
            const nextStartInterval = intervals[j]?.[0];
            const nextEnd = intervals[j]?.[1];

            if((nextStartInterval >= startInt && nextStartInterval <= endInt) || (nextEnd >= startInt && nextEnd <= endInt)){
                endInt = Math.max(nextEnd,endInt);
                startInt = Math.min(startInt,nextStartInterval)
                i = i+1;
            }else k = false;
          }
          ans.push([startInt,endInt]);
        }

        return ans;
    }
}
