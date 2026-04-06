class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int i =0, j = numbers.length-1;

        while(i < j){
            int a = numbers[i];
            int b = numbers[j];

            while(b+a > target){
                j--;
                b = numbers[j];
                a = numbers[i];
            }

            if(b+a == target) return new int[] {i+1,j+1};
            
            i++;
        }

        return new int[] {};
    }
}
