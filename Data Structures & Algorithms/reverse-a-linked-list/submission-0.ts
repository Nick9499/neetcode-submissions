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
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode | null {
        if (!head) {
            return null;
        }

        let newH: ListNode | null = head;

        if (head.next) {
            newH = this.reverseList(head.next);
            head.next.next = head;
        }

        head.next = null;
        return newH;
    }
}
