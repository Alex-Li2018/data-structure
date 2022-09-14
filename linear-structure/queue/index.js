/**
 * 队列FIFO first in, first out 先进先出
 * 
 */

const LinkNode = require('./node')

class Queue {
    constructor() {
        this.head = new LinkNode(null, null)
        this.last = null
        this.length = 0
    }

    isEmpty() {
        return this.length === 0
    }

    size() {
        return this.length
    }

    // 压栈
    enQueue(value) {
        if (this.last === null) {
            this.last = new LinkNode(value, null)
            this.head.next = this.last
        } else {
            const oldLast = this.last
            this.last = new LinkNode(value, null)
            oldLast.next = this.last 
        }

        this.length += 1
    }

    // 弹栈
    deQueue() {
        if (this.isEmpty()) {
            return null
        }
        
        const oldFirst = this.head.next
        this.head.next = oldFirst.next
        this.length -= 1

        if (this.isEmpty()) {
            this.last = null
        }

        return oldFirst.value
    }
}

const queue = new Queue()

queue.enQueue(1)
queue.enQueue(2)
queue.enQueue(3)

console.log(queue.deQueue())
console.log(queue.deQueue())

console.log(queue)