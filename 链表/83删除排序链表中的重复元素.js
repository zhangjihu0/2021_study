/**
 * 存在一个按升序排列的链表，给你这个链表的头节点head,请你删除所有重复的元素，使每个元素只出现一次
 * 返回同样按升序排列的结果链表
 * 输入 head=[1,1,2]
 * 输出 [1,2]
*/
function ListNode(val, next) {
    this.val = (val == undefined ? 0 : val)
    this.next = (next == undefined ? null : next)
}
let head = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 2,
                next: {
                    val: 3,
                    next: null
                }
            }
        }

    }
}
var deleteDuplicates = function (head) {
    let json = {};
    let ret = new ListNode(0, head), pre = ret;
    while (head.next) {
        if (head.val in json) {
            pre.next = pre.next.next
            head = head.next;
        } else {
            console.log('22', pre)
            json[head.val] = 1
            head = head.next;
            pre = pre.next;
        }

    }
    return ret.next;
}

var deleteDuplicates2 = function (head) {
    let med = head;
    while (med.val !== null && med.next.val !== null) {
        if (med.val == med.next.val) {
            med.next = med.next.next;
        } else {
            med = med.next;
        }
    }
    return head.next;
}

