class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const numbers = [];
        for(let val of tokens){  
        switch(val){
            case "+" :
                {
                numbers.push(numbers.pop()+numbers.pop());
                continue;
                }
            case "-" :
                {
                numbers.push(-numbers.pop()+numbers.pop());
                continue;
                }
            case "*" :
                {
                    numbers.push(numbers.pop()*numbers.pop());
                    continue;
                }
            case "/" :
                {
                    const div = numbers.pop();
                    const den = numbers.pop();
                    const end = den/div;
                    numbers.push(end > 0 ? Math.floor(end) : Math.ceil(end));
                    continue;
                }
            default :
                {
                    numbers.push(Number(val));
                    continue;
                }
        }
        }

        console.log(numbers)
        return numbers[0]
    }
}
