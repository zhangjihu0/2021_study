/**
 * 给你一个链表的头结点head,旋转链表，将链表每个节点向右移动K个位置
 */

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
}
/**
 * 
 * @param {*} head 
 * @param {*} k 
 */
var rotateRight = function (head, k) {

    //1.判断我们的链表是否为空
    if (!head) return null;
    //2.将我们的链表的尾部连接到我们链表的头部，为了将链表穿成环
    let pre = head, size = 1;
    while (pre.next) pre = pre.next, size++;
    pre.next = head;
    //3.拿到我们链表长度size 找到size-k,将当前的指向断开
    for (let i = 1; i < size - (k % size); i++) {
        head = head.next
    }
    pre = head.next
    head.next = null;
    return pre;
}

const ss = rotateRight(head, 2);
console.log(ss)
