/**
 *
 *给你单链表的头指针head和两个整数left和right,其中left<=rigth
 请你从位置left到位置right 的链表节点；返回反转后的链表
 输入: head=[1,2,3,4,5];left=2,rigth=4;

 1.我们定义一个虚拟头节点，hair，将他指向我们的真实头节点
 定义一个指针pre指向虚拟头节点
 定义一个指针cur指向pre指针所指向节点的下一个节点
 2.让我们的pre指针和cur指针同时向后移动，直到我们找到第m个节点
 3.定义指针con和tail,con指向pre所指向的节点，tail指向cur指针所指向的节点。
 con所指向的节点，将是我们将部分链表反转后，部分链表头的前驱节点。
 tail则是部分链表反转后的尾节点。
 4.开始我们的链表反转，
 首先定义一个指针thrid 指向cur 所指向的节点的下一个节点，
 然后，将cur 所指向的节点指向pre所指向的节点，
 将pre指针移动到cur指针所在的位置
 将cur指针移动到third指针所在的位置，直到我们的pre指针指向弟n个节点
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * 
 * @param {*} head 
 * @param {*} left 
 * @param {*} rigth 
 * @returns 
 */


var reverseBetween = function (head, left, right) {
    if (!head) return null;
    let ret = new ListNode(-1, head);
    pre = ret;
    cnt = right - left + 1;
    while (--left) {
        //先减一在执行 将指针放在left前一位
        pre = pre.next;
    }
    pre.next = reverse(pre.next, cnt)
    return pre
}

var reverse = function (head, n) {
    let pre = null, cur = head;
    while (n--) {
        [cur.next, pre, cur] = [pre, cur, cur.next];
    }
    console.log('53', pre)
    head.next = cur
    return pre
}
const head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
};
let left = 2, right = 4;
let result = reverseBetween(head, left, right);
console.log('result:', result)


