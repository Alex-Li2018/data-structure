// Node class
class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

// Binary Search tree class
class BinarySearchTree {
	constructor() {
		// root of a binary search tree
		this.root = null;
	}

	insertLeft(data) {
        const node = new Node(data)

		if (this.root === null) {
			this.root = node
		} else {
			let curNode = this.root

			while(curNode.left) {
				curNode = curNode.left
			}

			curNode.left = node
		}
    }

	insertRight(data) {
		const node = new Node(data)

		if (this.root === null) {
			this.root = node
		} else {
			let curNode = this.root

			while(curNode.right) {
				curNode = curNode.right
			}

			curNode.right = node
		}
	}			

	// Helper function
	// 中序遍历
	inorder(node) {
		const traverseArr = []

		// 递归实现
		function traverse(node) {
			if (node) {
				// 遍历左节点
				traverse(node.left)

				traverseArr.push(node.data)

				// 遍历右节点
				traverse(node.right)
			} else {
				return
			}
		}
		
		traverse(node)

		console.log(traverseArr)
	}

	// 先序遍历
	preorder(node) {
		const traverseArr = []

		// 递归实现
		function traverse(node) {
			if (node) {
				traverseArr.push(node.data)

				// 遍历左节点
				traverse(node.left)

				// 遍历右节点
				traverse(node.right)
			} else {
				return
			}
		}
		
		traverse(node)

		console.log(traverseArr)
	}	
	
	// 后序遍历
	postorder(node) {
		const traverseArr = []

		// 递归实现
		function traverse(node) {
			if (node) {
				// 遍历左节点
				traverse(node.left)

				// 遍历右节点
				traverse(node.right)

				traverseArr.push(node.data)
			} else {
				return
			}
		}
		
		traverse(node)

		console.log(traverseArr)
	}

	// 广度优化 Breath First Search 非递归实现
	breathFirstSearch(root) {
		const queue = []
		const traverseArr = []

		queue.push(root)

		while(queue.length) {
			const node = queue.shift()

			traverseArr.push(node.data)

			node.left && queue.push(node.left)
			node.right && queue.push(node.right)
		}

		console.log(traverseArr)
	}
}


const bs = new BinarySearchTree()

bs.insertLeft(1)
bs.insertLeft(2)
bs.insertRight(3)
bs.insertLeft(4)
bs.insertRight(5)

console.log(bs)
bs.inorder(bs.root)
bs.preorder(bs.root)
bs.postorder(bs.root)

bs.breathFirstSearch(bs.root)
