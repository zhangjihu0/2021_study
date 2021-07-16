/**
 * 给你一个链表，删除链表的倒数第n个节点，并且返回链表的头节点。
 * 进阶：你能尝试使用一趟扫描实现吗
 * 输入：head=[1,2,3,4,5],n=2
 * 输出：[1,2,3,5]
 */
var head = {
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
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next == undefined ? null : next)
}

var removeNthformEnd = function (head, n) {
    if (!head) return null
    let ret = new ListNode(0, head), pre = ret;
    let num = 0, sentry = 0, flag = false
    do {
        num = num + 1;
        if (!pre.next) { //在最后一个节点时，正序计算需要删除的第几个sentry,链表转化成环形链表
            sentry = num - n - 1;
            num = 0;
            pre.next = head;
        }
        if (num == sentry && sentry != 0) { //删除需要删除的节点.设置标识状态
            pre.next = pre.next.next;
            flag = true;
        }
        if (num == sentry + n - 1 && flag == true) {
            pre.next = null
            return ret.next;
        }
        pre = pre.next;
    } while (1)
}

// let result = removeNthformEnd(head, 2);
// console.log("anwser:", JSON.stringify(result))

var removeNthformEnd2 = function (head, n) {
    if (!head) return null;
    let ret = new ListNode(0, head), pre = ret, cur = head;
    while (--n && cur) {
        cur = cur.next
    };
    if (!cur) {
        return head
    }
    while (cur.next) {
        pre = pre.next;
        cur = cur.next;
    }
    pre.next = pre.next.next;
    return ret.next
}

let result2 = removeNthformEnd2(head, 2);
console.log("anwser2:", JSON.stringify(result2))




