/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if(!head) return false;
        let dummy1 = head;
        let dummy2 = head.next;

        while(dummy1 && dummy1.next && dummy2 && dummy2.next && dummy2.next.next){
            if(dummy1 === dummy2) return true;
            
            dummy1 = dummy1.next;
            dummy2 = dummy2.next.next;
        }

        return false
    }
}
