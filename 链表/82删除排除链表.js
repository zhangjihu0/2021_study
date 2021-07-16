/**
 * 存在一个按照升序排列的链表，给你这个链表的头节点head,
 * 请你删除链表中所有存在数字重复情况的节点，
 * 只保留原始链表中没有重复出现的数字
 * 返回同样按升序排列的结果链表
 *
 * 输入 head=[1,2,2,3,3,4,4,5,6,7]
 * 输出 [1,5,6,7]
*/
function ListNode(val, next) {
    this.val = (val == undefined ? 0 : val)
    this.next = (next == undefined ? null : next)
}
var deleteDuplicates = function (head) { //快慢指针
    if (!head) return null;
    let ret = new ListNode(-1, head), pre = ret, cur = head;
    while (cur && cur.next) {
        if (cuy.next.val != pre.next.val) {
            cur = cur.next;
            pre = pre.next;
        } else {
            while (cur && cur.next && pre.next.val === cur.next.val) {
                cur = cur.next
            }
            pre.next = cur.next;
            cur = cur.next;
        }
    }
    return ret.next
}