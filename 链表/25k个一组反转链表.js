/**
 * 给你一个链表，每k个节点一组进行反转，请你返回翻转后的链表
 * k是一个真正数字，它的值小于或等于链表的长度
 * 如果节点总数不是k的整数倍，那么请将最后剩余的节点保持原有顺序
 * 进阶：你可以设计一个只使用常数额外空间的算法来解决此问题吗?
 * 你不能只是单纯的改变节点内部的值，
 * 而是需要实际进行节点交换
 * 输入:head=[1,2,3,4,5];k=2;
 * 输出:[2,1,4,3,5]
 * 
 * 
 * 
 * 
 *** prev 始终代表当前节点P的next所指向的节点***
 * 1.设置pre,tail 指向开始的前一个节点，移动tail指针，找到第K个节点，
 * 2.然后反转从head节点到tail节点之间的链表。
 * 3.1 定义一个指针prev指向tail指针所指节点的下一个节点；
 * 3.2 定义指针P指向head节点
 * 3.3 定义指针next指向P指针所指向节点的下一个节点
 * 
 * 4.1 将P指针所指向的节点指向prev指针所指向的节点
 * 4.2 将prev指针移动到P指针所在的位置
 * 4.3 将P指针移动到next指针所在的位置
 * 4.4 next向后移动一位
 * 5.1 当prev 指针与tail 指针指向同一个节点，我们K个节点的链表就是反转完毕，
 * 
 * 5.2 让后让pre指针所指的节点指向tail节点所指的原始节点(当前组最后的节点)
 * 6.1 tail(随着节点的反转已经转移到了当前组开始的位置) 指针再次指向pre 指针所指的节点(当前组最后的节点)
 * 7.1 然后tail节点再移动K步，如果tail节点为空，证明后面的节点不足K个，返回链表
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * 
 * @param {*} head 
 * @param {*} k 
 */

var reverseKGroup = function (head, k) {
    //创建一个虚拟节点指向head;创建变量p 指向虚拟节点
    let ret = new ListNode(0, head), p = ret;

    do {
        p.next = reverse(p.next, k);
        for (let i = 0; i < k && p; i++) {
            p = p.next;
        }
        if (p == null) {
            break;
        }
    } while (1)
    return ret.next;//返回虚拟节点的下一个
}

var reverse = function (head, n) {
    let pre = head;
    let cur = head;
    let cnt = n;
    //n减一次 pre往后走一步
    while (--n && pre) {
        pre = pre.next
    }
    //如果前端的pre等于空直接返回pre 不做任何操作
    if (pre == null) {
        return head;
    }
    //pre满足反转条件。将pre清空，截取
    pre = null;
    //以上为验证当前范围是否满足反转条件

    while (cnt--) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    head.next = cur;
    return pre;
}

