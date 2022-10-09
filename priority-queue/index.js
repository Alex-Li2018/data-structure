/**
 * 优先队列
 * 
 */

class MaxPriorityQueue {
    constructor() {
        this.items = []
        this.length = 0
    }

    size() {
        return this.length
    }

    isEmpty() {
        return this.length === 0
    }

    less(i, j) {
        return this.items[i] < this.items[j]
    }

    exch(i, j) {
        const temp = this.items[i]
        this.items[i] = this.items[j]
        this.items[j] = temp 
    }

    insert(value) {
        this.items[++this.length] = value
        this.swim(this.length)
    }

    //使用上浮算法，使索引k处的元素能在堆中处于一个正确的位置
    swim(k) {
        //如果已经到了根结点，就不需要循环了 
        while (k > 1) { 
            //比较当前结点和其父结点 
            if (this.less(k / 2, k)) { 
                //父结点小于当前结点，需要交换 
                this.exch(k / 2, k); 
            }
            k = k / 2; 
        }
    }

    // 下沉算法
    sink(k) { 
        //如果当前已经是最底层了，就不需要循环了 
        while (2 * k <= this.length) { 
            //找到子结点中的较大者 
            let max = 2 * k; 
            if (2 * k + 1 <= this.length) {
                //存在右子结点 
                if (this.less(2 * k, 2 * k + 1)) { 
                    max = 2 * k + 1; 
                }
            }
            //比较当前结点和子结点中的较大者，如果当前结点不小，则结束循环 
            if (!this.less(k, max)) { 
                break; 
            }
            //当前结点小，则交换， 
            this.exch(k, max);

            k = max
        }
    }

    delMax() {
        let max = this.items[1]; 
        //交换索引1处和索引N处的值 
        this.exch(1, this.length); 
        //删除最后位置上的元素 
        this.items[this.length] = null; 
        this.length--;
        //个数-1 
        this.sink(1); 
        return max;
    }
}