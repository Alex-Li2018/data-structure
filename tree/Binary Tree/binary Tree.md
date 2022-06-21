# [binary tree](https://www.geeksforgeeks.org/binary-tree-set-3-types-of-binary-tree/?ref=lbp)

A tree whose elements have at most 2 children is called a binary tree. Since each element in a binary tree can have only 2 children, we typically name them the left and right child. 

最多两个节点

## 遍历方式

- PreOrder Traversal（先序遍历）: Here, the traversal is : root – left child – right child. It means that the root node is traversed first then its left child and finally the right child.

- InOrder Traversal（中序遍历）: Here, the traversal is : left child – root – right child.  It means that the left child is traversed first then its root node and finally the right child.

- PostOrder Traversal（后序遍历）: Here, the traversal is : left child – right child – root.  It means that the left child is traversed first then the right child and finally its root node.

序是指root Node遍历的次序

## 属性

- 二叉树每一层节点数量最大的是2^n The maximum number of nodes at level ‘l’ of a binary tree is 2^l

```text
level1 0 2^0 = 1
level2 1 2^1 = 2
level3 2 2^3 = 8
```

- 二叉树高度是h的时候那么节点数量最大是The Maximum number of nodes in a binary tree of height ‘h’ is 2^h – 1.

```text
tree 高度是h
level 是h-1
```

- （n个节点在二叉树中，二叉树的最小高度是log2(N+1)）In a Binary Tree with N nodes, minimum possible height or the minimum number of levels is Log2(N+1).

```text
N <=  2^h - 1
2^h >= N+1
h >= log2(N+1)           (Taking log both sides)
h >= | log2(N+1) |       (h is an integer)
```

## 分类

### full binary tree(全二叉树)

A Binary Tree is a full binary tree if every node has 0 or 2 children. 

会出现有的叶子节点没有子节点
```js
              18
           /       \  
         15         30  
        /  \        /  \
      40    50    100   40

             18
           /    \   
         15     20    
        /  \       
      40    50   
    /   \
   30   50

               18
            /     \  
          40       30  
                   /  \
                 100   4
```

### Complete Binary Tree（完整二叉树）

- Every level must be completely filled（每一级都必须全部填完）

- All the leaf elements must lean towards the left.（所有叶子节点都必须向左倾斜）

- The last leaf element might not have a right sibling i.e. a complete binary tree doesn’t have to be a full binary tree.（最后一个页子元素可能没有右兄弟元素）

```js
              18
           /       \  
         15         30  
        /  \        /  \
      40    50    100   40


               18
           /       \  
         15         30  
        /  \        /  \
      40    50    100   40
     /  \   /
    8   7  9 

```

### Perfect Binary Tree(完美二叉树)

A Binary tree is a Perfect Binary Tree in which all the internal nodes have two children and all leaf nodes are at the same level（内部节点都有两个子节点，所有的叶子节点都有相同的层级）

```js
               18
           /       \  
         15         30  
        /  \        /  \
      40    50    100   40


               18
           /       \  
         15         30 
```

### Balanced Binary Tree(平衡二叉树)

A binary tree is balanced if the height of the tree is O(Log n) where n is the number of nodes. For Example, the AVL tree maintains O(Log n) height by making sure that the difference between the heights of the left and right subtrees is at most 1. Red-Black trees maintain O(Log n) height by making sure that the number of Black nodes on every root to leaf paths is the same and there are no adjacent red nodes. Balanced Binary Search trees are performance-wise good as they provide O(log n) time for search, insert and delete. 

It is a type of binary tree in which the difference between the height of the left and the right subtree for each node is either 0 or 1.