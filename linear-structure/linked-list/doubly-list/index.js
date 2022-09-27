const LinkNode = require('./node')

class DoublyList {
  constructor() {
    this.length = 0
    this.head = new LinkNode(null, null, null)
    this.tail = null
  }

  clear() {
    this.head = new LinkNode(null, null, null)
    this.tail = null
    this.length = 0
  }

  isEmpty() {
    return this.head.value
  }

  length() {
    return this.length
  }

  add(value) {
    if(this.tail === null) {
      this.tail = new LinkNode(value, null, this.head)
      this.head.next = this.tail
    } else {
      const oldLast = this.tail
      const node = new LinkNode(value, null, oldLast)
      oldLast.next = node
      this.tail = node
    }
    this.length += 1
  }

  insert(i, value) {
    if (i < 0 || i > this.length) {
      return new Error('插入位置不合法')
    }

    let pre = this.head
    for (let index = 0; index < i; index++) {
      pre = pre.next
    }

    const current = pre.next
    const newNode = new LinkNode(value, current, pre)
    current.prev = newNode
    pre.next = newNode
    this.length += 1
  }

  remove(i) {
    if (i < 0 || i > this.length) {
      return new Error('插入位置不合法')
    }

    let index = 1
    let current = this.head
    while (current.next) {
      current = current.next 
      
      if (index == i) {
        current.prev.next = current.next
        current.next.prev = current.prev
        break
      }
    }

    this.length -= 1
  }

  reverse(curr) {
    if (curr.next === null) {
      this.head = new LinkNode(null)
      this.head.next = curr
      this.tail = null
      curr.prev = null
      return curr
    }

    const pre = this.reverse(curr.next)
    pre.next = curr
    curr.next = null
    curr.prev = pre

    return pre.next
  }
}

const link = new DoublyList()
link.add(1)
link.add(2)
link.add(4)
link.insert(2,3)
// link.remove(1)
link.reverse(link.head.next)
console.log(link)

