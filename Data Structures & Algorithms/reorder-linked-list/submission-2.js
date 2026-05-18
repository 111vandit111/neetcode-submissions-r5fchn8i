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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = slow;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        
        let second = slow.next;
        let prev = (slow.next = null);

        while(second){
            let temp = second.next;
            second.next = prev;
            prev = second;
            second = temp;
        }

        let start = head;
        second = prev;

        while(second){
            let temp1 = start.next;
            let temp2 = second.next;

            start.next = second;
            second.next = temp1;

            start = temp1;
            second = temp2;
        } 

    }
}
