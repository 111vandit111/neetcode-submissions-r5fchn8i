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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {

        if(!lists || !lists.length) return null;

        while(lists.length > 1){
           let mergedLists = [];
           for(let i = 0;i<lists.length;i=i+2){
            const l1 = lists[i];
            const l2 = i+1 < lists.length ? lists[i+1] : null;
            mergedLists.push(this.mergerList(l1,l2));
           }
           lists = mergedLists;
        }

        return lists[0];

    }

    mergerList(node1, node2){
        const dummy = new ListNode(0);
        let curr = dummy;

        while(node1 && node2){

            if(node1.val < node2.val){
                curr.next = node1;
                node1 = node1.next;
            }else{
                curr.next = node2;
                node2 = node2.next;
            }

            curr = curr.next;
        }

        curr.next = node1? node1 : node2;

        return dummy.next;
    }
}
