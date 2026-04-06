class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        HashMap<Character,Character> map = new HashMap<>();
        
        map.put('}' , '{');
        map.put(']', '[');
        map.put(')','(');

        for(int i = 0 ; i<s.length();i++){
            char x = s.charAt(i);
            if(x=='}' || x == ']' || x==')'){
                if(!stack.isEmpty() && stack.peek() == map.get(x)) stack.pop();
                else return false ;
            }
            else { 
                stack.push(x);
        }
}

        if(stack.size() > 0) return false ;
        
        return true;
}
}
