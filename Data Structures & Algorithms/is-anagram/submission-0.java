class Solution {
    public boolean isAnagram(String s, String t) {
       int[] map1 = new int[26];
       int[] map2 = new int[26];
       if(s.length() != t.length()) return false;

       for(int i = 0 ;i<s.length();i++){
        map1[s.charAt(i)-'a'] += 1;
        map2[t.charAt(i)-'a'] += 1;
       }

       for(int j = 0 ;j<s.length();j++){
        if(map1[t.charAt(j)-'a'] != map2[t.charAt(j)-'a']) return false;
       }

       return true;
    }
}
