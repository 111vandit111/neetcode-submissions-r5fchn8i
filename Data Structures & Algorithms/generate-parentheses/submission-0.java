class Solution {
    public List<String> generateParenthesis(int n) {
         List<String> res = new ArrayList<>();
        Stack<Character> stack = new Stack<>();
        getParant(n, 0, 0, res,stack);
        return res;
    }

    public void getParant(int n,int openN,int closedN,List<String> res,Stack<Character> stack){
        if(openN == closedN && openN == n){
            StringBuilder sb = new StringBuilder();
            for (char c : stack) {
                sb.append(c);
            }
            res.add(sb.toString());
            return;
        }
        if(openN < n){
            stack.add('(');
            getParant(n,openN+1,closedN,res,stack);
            stack.pop();
        }

        if(closedN < openN){
            stack.add(')');
            getParant(n,openN,closedN+1,res,stack);
            stack.pop();
        }
    }
}
