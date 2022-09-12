const LinkNode = require('./node')

class SingleList {
  constructor() {
    this.length = 0
    this.head = new LinkNode(null)
  }

  clear() {
    this.head = new LinkNode(null)
    this.length = 0
  }

  isEmpty() {
    return this.head.value
  }

  length() {
    return this.length
  }

  add(value) {
    let current = this.head
    while(current.next) {
      current = current.next
    }
    current.next= new LinkNode(value)
    this.length += 1
  }

  insert(i, value) {
    if (i < 0 || i > this.length) {
      return new Error('插入位置不合法')
    }

    let index = 1
    let current = this.head.next
    while (current.next) {
      if (index == i) {
        const temp = new LinkNode(value, current.next)
        current.next = temp
        break
      }

      current = current.next
      index ++
    }

    this.length += 1
  }

  remove(i) {
    if (i < 0 || i > this.length) {
      return new Error('插入位置不合法')
    }

    let index = 1
    let current = this.head
    while (current.next) {
      if (index == i) {
        const temp = current.next.next
        current.next = temp
        break
      }
      current = current.next
      
    }

    this.length -= 1
  }

  reverse(curr) {
    if (curr.next === null) {
      this.head = new LinkNode(null)
      this.head.next = curr
      return curr
    }

    const pre = this.reverse(curr.next)
    pre.next = curr
    curr.next = null

    return pre.next
  }
}

const link = new SingleList()
link.add(1)
link.add(2)
link.add(4)
link.insert(2,3)
// link.remove(1)

link.reverse(link.head.next)
console.log(link)

