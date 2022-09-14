/**
 * 栈FILO first in, last out 先进后出
 * 
 */

const LinkNode = require('./node')

class Stack {
    constructor() {
        this.head = new LinkNode(null, null)
        this.length = 0
    }

    isEmpty() {
        return this.length === 0
    }

    size() {
        return this.length
    }

    // 压栈
    push(value) {
        this.head.next = new LinkNode(value, this.head.next)
        this.length += 1
    }

    // 弹栈
    pop() {
        const popNode = this.head.next
        if (popNode === null) {
            return null
        }

        // this.head = new LinkNode(null, popNode.next)
        this.head.next = this.head.next.next
        this.length -= 1

        return popNode.value
    }
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack.pop())
console.log(stack.pop())

console.log(stack)