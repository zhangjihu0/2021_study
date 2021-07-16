/**
 * 给定一个链表,返回链表开始入环的第一个节点。如果链表无环，则返回null
 *为了表示给定链表中的环，我们使用整数pos来表示链表尾连接到链表中的位置索引从0开始。如果pos 是-1，则在该链表中没有环，注意
 pos仅仅是用于标识环的情况，并不会作为参数传递到函数中
 不允许修改给定的链表
 * 进阶：
 * 你能使用O(1)（即，常量）内存解决此问题
 * 实例1：
 *  输入：head=[3,2,0,-4];pos =1;
 *  输出: true;
 *  解释：链表中有一个环，其尾部连接到第二个节点;
 *
 *
 *
 * 设定:开始位置到首尾相接点的距离为A；
 * 相接点到快慢指针相遇点的距离为B；
 * 相遇点到首尾相接点的距离为C；
 * 相遇时 快指针走过的距离为A+n(B+C)+B
 *       慢指针:A+B
 * 慢指针的速度为快指针的一半
 * 转化为 2(A+B) = A+n(B+C)+B
 *      A+B = n(B+C)
 *      A+B = nB+nC;
 *      A = nB+nc-B
 *      A = (n-1)B+nC
 * A = (n-1)(B+C)+C
 *
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
            let temp = head;
            //让慢指针与temp 指针相遇
            while (pre != temp) {
                pre = pre.next;
                temp = temp.next
            }
            return pre
        }
    }
    //如果没有找到就返回 Null
    return null

}