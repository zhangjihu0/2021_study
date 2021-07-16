/**
 * 环形链表的变形
 * 编写一个算法来判断一个数n 是不是快乐数。
 * [快乐数]定义为：
 * 1.对于一个正常的数，每一次将该数字替换为它在每个位置上的数字的平方和。
 * 2.然后重复这个过程直到这个数变为1，也可能就是无限循环，但始终变不到1.
 * 如果 可以变成1，那么这个数字就是快乐数
 *
 * 如果是快乐数就返回true;不是就返回false
 *
 * 输入19 输出true
 * 解释 1^2+9^2=82
 * 8^2+2^ = 68
 * 6^2+8^2 = 36+64 = 100
 * 1^2+0^2+0^2 = 1
 */


var isHappy = function (n) {
    var pre = n, cur = getNext(n);
    while (cur != 1 && pre != cur) {
        pre = getNext(pre);
        cur = getNext(getNext(cur))
    }
    return cur == 1
}

var getNext = function (n) {
    var s = 0;
    while (n) {
        s += (n % 10) * (n % 10)
        n = Math.floor(n / 10);
    }
}