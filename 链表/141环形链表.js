/**
 * 给定一个链表，判断链表中是否有环
 * 如果链表中有某个节点，可以通过连续跟踪next指针再次到达，则链表中存在环。
 * 为了表示链表中的环，我们使用整数pos来表示链表尾连接到链表的位置（索引从零开始）。如果pos是-1，则在该链表中没有环。
 * 注意pos不作为参数进行传递，仅仅为了标识链表的实际情况
 * 如果链表中存在环，则返回true,否则，返回false
 *
 * 进阶：
 * 你能使用O(1)（即，常量）内存解决此问题
 * 实例1：
 *  输入：head=[3,2,0,-4];pos =1;
 *  输出: true;
 *  解释：链表中有一个环，其尾部连接到第二个节点;
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * 
 * @param {*} head 
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head) {
        return false
    }
    let cur = head,
        pre = head;
    while (cur & cur.next) {
        pre = pre.next;
        cur = cur.next.next
        if (pre == cur) {
            return true
        }
    }
    return false

}


