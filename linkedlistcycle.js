/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head == null) return false;
    fast = head;
    slow = head;
    while(fast.next !=null && fast.next.next != null)
    {
        fast=fast.next.next;
        slow=slow.next;
        if(fast==slow)
            return true;
    }
    return false;
};
