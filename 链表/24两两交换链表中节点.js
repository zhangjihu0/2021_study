/**
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换
 * 输入：head =[1,2,3,4];  [1]
 * 输出：[2,1,4,3];    [1]
 * 
 *
 *
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
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
}

var fn = function (head) {
    if (!head) return null;
    let ret = new ListNode(0, head), pre = ret;
    while (pre.next) {
        pre.next = reverse(pre.next, 2)
        pre = pre.next.next;
        if (!pre) {
            break;
        }
    }

    return JSON.stringify(ret.next)
}

var reverse = function (head, n) {
    let pre = null, cur = head;
    if (!head.next) return head;
    while (n--) {
        var next = cur.next;

        cur.next = pre;

        pre = cur;

        cur = next;
    }
    head.next = cur;
    return pre
}

var a = fn(head);
console.log('56', a);