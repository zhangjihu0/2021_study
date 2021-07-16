/**
 * 给定单链表的头节点head,请你反转链表，并返回反转后的链表
 * head = [1,2,3,4,5]
 * 输出 [5,4,3,2,1]
 *
 *
 * 首先我们定义三个指针--pre、cur、next,然后对我们的指针进行初始化
 * pre 指向空，cur 指向我们的头节点，next指向cur 所指向节点的下一个节点
 * 这样我们的指针就初始化完毕了
 * 
 */


const resert = (head) => {
    if (!head) return null;
    let pre = null, cur = head;
    while (cur) {
        //保存当前节点的下一个
        const next = cur.next;
        //修改当前节点的指向为pre问
        cur.next = pre;
        pre = cur; //移动pre 指针向右
        cur = next //移动cur 指针向右
    }


}