class Solution {
    public int evalRPN(String[] tokens) {
        Stack<Integer> stack = new Stack<>();
        for (String c : tokens) {
            switch(c){
                case "+":
                stack.push(stack.pop()+stack.pop());
                break;
                case "-":
                stack.push(-(stack.pop()-stack.pop()));
                break;
                case "/":
                stack.push((int) ((float)1/stack.pop()*stack.pop()));
                break;
                case "*":
                stack.push(stack.pop() * stack.pop());
                break;
                default:
                stack.push(Integer.parseInt(c));
            }
    }

    return stack.pop();
}
}
