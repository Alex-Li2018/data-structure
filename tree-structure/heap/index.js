/**
 * 堆 完全二叉树
   https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/heap/README.zh-CN.md
   1. 是完全二叉树,除了树的最后一层结点不需要是满的，其它的每一层从左到右都是满的，如果最后一层结点不
是满的，那么要求左满右不满。
   2. 通常用数组实现，如果一个结点的位置为k，则它的父结点的位置为[k/2],而它的两个子结点的位置则分别为2k和2k+1。这样，在不
使用指针的情况下，我们也可以通过计算数组的索引在树中上下移动：从a[k]向上一层，就令k等于k/2,向下一层就
令k等于2k或2k+1。
   3. 每个结点都大于等于它的两个子结点。这里要注意堆中仅仅规定了每个结点大于等于它的两个子结点，但这两个
子结点的顺序并没有做规定，跟我们之前学习的二叉查找树是有区别的。
 */

class Heap {
    constructor() {
        this.length = 0
        this.heapContainer = []
    }

    less(i, j) {
        return this.heapContainer[i] < this.heapContainer[j]
    }

    exch(i, j) {
        const temp = this.heapContainer[i]
        this.heapContainer[i] =  this.heapContainer[j]
        this.heapContainer[j] = temp
    }

    insert(t) {
        this.heapContainer[++this.length] = t

        this.swim(this.length)
    }

    getParentIndex(childIndex) {
        return Math.floor(childIndex / 2);
    }

    hasParent(childIndex) {
        return this.getParentIndex(childIndex) >= 0;
    }

    parent(childIndex) {
        return this.heapContainer[this.getParentIndex(childIndex)];
    }

    // 上浮 使索引k处的元素能在堆中处于一个正确的位置
    swim(k) {
        //如果已经到了根结点，就不需要循环了 
        while( k > 1 ) { 
            //比较当前结点和其父结点 
            if(this.less(this.getParentIndex(k), k)) { 
                //父结点小于当前结点，需要交换 
                this.exch(this.getParentIndex(k), k); 
            }
            k = this.getParentIndex(k); 
        }
    }

    // 下沉
    sink(k) {
        // 如果当前已经是最底层了，就不需要循环了 
        while(2*k <= this.length) { 
            //找到子结点中的较大者 
            let max

            if (2*k + 1 <= this.length) {
                //存在右子结点 
                if (this.less(2*k, 2*k+1)) { 
                    max = 2 * k+1; 
                } else { 
                    max = 2 * k; 
                } 
            } else {
                //不存在右子结点 
                max = 2 * k;
            }

            //比较当前结点和子结点中的较大者，如果当前结点不小，则结束循环 
            if (!this.less(k, max)) { 
                break; 
            }

            //当前结点小，则交换， 
            this.exch(k, max); 
            k = max;
        }
    }

    // 删除最大值
    delMax() {
        let max = this.heapContainer[1]; 
        //交换索引1处和索引N处的值 
        this.exch(1, this.length); 
        //删除最后位置上的元素 
        this.heapContainer[this.length] = null; 
        //个数-1 
        this.length--;

        this.sink(1); 
        return max;
    }
}

const heap = new Heap()
heap.insert(20)
heap.insert(30)
heap.insert(40)
heap.insert(50)
heap.insert(15)
heap.insert(12)

heap.delMax()

console.log(heap)