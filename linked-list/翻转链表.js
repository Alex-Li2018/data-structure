// 翻转链表
/*
   这里只处理只有头指针的情况
*/

const LinkList = require('./LinkList')

const list = new LinkList()
list.append(3)
list.append(2)
list.append(1)

console.log(list)

// list: 3 -> 2-> 1 翻转为 1 -> 2 -> 3

/**
 * reverseAll 整体翻转
 * args 链表
 */
function reverseAll(args) {
    if (args.next == null) return args
    let last = reverseAll(args.next)
    // 将将链表的最后一个节点值为null的点 赋值为 整个链表
    // 这样last的null值也跟着变为整个链表
    args.next.next = args
    // 翻转之后的值
    args.next = null
    return last
}

/***
例子表述：2 -> 1
args = {
    value: 2,
    next: {
        value: 1,
        next: null
    } 
}

f(2 -> 1)f(1 -> null)

f(1 -> null) return { value: 1, next: null }
此时 last { value: 1, next: null } args: { value: 2, next: { value: 1, next: null} }

f(2 -> 1)
args.next.next = args
// 因为对象的地址引用问题
last { value: 1, next: args } args: { value: 2, next: { value: 1, next: null} }

args.next = null
// 一是将args的循环引用解决，防止爆栈
// 二是将last的next数据只取value的值2 next属性置为null
last { value: 1, next: { value: 2, next: null } } args: { value: 2, next: null }
*/

reverseAll(list.head)

