class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const ans = [];

        for(let i = 0;i<temperatures.length;i++){
            const t = temperatures[i];
            while(stack.length && stack.at(-1)[0]<t){
                const temp = stack.pop();
                ans[temp[1]] = i - temp[1];
            }
            stack.push([t,i]);
        }

        temperatures.map((_,index) => {
            if(!ans[index]) ans[index] = 0;
        })

        return ans;
    }
}
