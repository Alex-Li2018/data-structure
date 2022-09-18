/**
 设x是二叉搜索树中的一个结点。如果y是x左子树中的一个结点，那么y.key ≤ x.key。
 如果y是x右子树中的一个结点，那么y.key ≥ x.key。
 在二叉搜索树中：
 
  1.若任意结点的左子树不空，则左子树上所有结点的值均不大于它的根结点的值。
  2.若任意结点的右子树不空，则右子树上所有结点的值均不小于它的根结点的值。
  3.任意结点的左、右子树也分别为二叉搜索树。
 */

class Node {
    constructor(key, value, left, right) {
        this.key = key
        this.value = value
        this.left = left
        this.right = right
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
        this.length = 0
    }

    /**
     * 
     * @param {*} key 
     * @param {*} value
     1.如果当前树中没有任何一个结点，则直接把新结点当做根结点使用
     2.如果当前树不为空，则从根结点开始：
       2.1 如果新结点的key小于当前结点的key，则继续找当前结点的左子结点；
       2.2 如果新结点的key大于当前结点的key，则继续找当前结点的右子结点；
       2.3 如果新结点的key等于当前结点的key，则树中已经存在这样的结点，替换该结点的value值即可。 
     */
    put(key, value) {
        this.root = this.putWithSubTree(this.root, key, value)
    }

    // 在指定树上插入
    putWithSubTree(root, key, value) {
        if (!root) {
            this.length += 1
            return new Node(key, value, null, null)
        } else {
            let rootKey = root.key

            if (rootKey === key) {
                root.value = value
            } else if (key < rootKey) {
                root.left = this.putWithSubTree(root.left, key, value)
            } else {
                root.right = this.putWithSubTree(root.right, key, value)
            }
        }

        return root
    }

    // 获取指定key值里的value
    getValue(key) {
        return this.getValueWithSubTree(this.root, key)
    }

    // 从指定子树x中找出key值对应的value
    getValueWithSubTree(root, key) {        
        let rootKey = root.key
        let value

        if (rootKey === key) {
            return root.value
        } else if (key < rootKey) {
            value = this.getValueWithSubTree(root.left, key)
        } else {
            value = this.getValueWithSubTree(root.right, key)
        }

        return value
    }

    // 删除key值对应的节点
    deleteKey(key) {
        this.root = this.deleteKeyWithSubTree(this.root, key)
    }

    // 从指定子树里面删除key值对应的节点
    deleteKeyWithSubTree(root, key) {
        if (!root) {
            return null
        }

        let rootKey = root.ke

        if (key < rootKey) {
            root.left = this.getValueWithSubTree(root.left, key)
        } else if (key > rootKey) {
            root.right = this.getValueWithSubTree(root.right, key)
        } else {
            if (root.left === null) {
                return root.left
            }

            if (root.right === null) {
                return root.right
            }

            let minNode = root.right

            while(minNode.left !== null) {
                minNode = minNode.left
            }

            let n = root.right
            while (n.left != null) {
                if (n.left.left == null) { 
                    n.left = null 
                } else { 
                    n = n.left 
                } 
            }

            minNode.left = x.left
            minNode.right = x.right 
            
            this.length -= 1
        }

        return root

    }

    size() {
        return this.length
    }
}

const bs = new BinarySearchTree()
bs.put(18, 'lisi')
bs.put(15, 'zhangsan')
bs.put(20, 'wangwu')
bs.put(12, 'zhaosan')
bs.put(13, 'tangli')
bs.put(14, 'songbao')
const value = bs.getValue(14)
console.log(bs, value)