// 差分数组
class DifferenceArray {
    constructor() {
        this.diff = []
    }

    // 构造差分数组
    formatDifferenceArray(nums) {
        this.diff = new Array(nums.length)
        this.diff[0] = nums[0]
        for(let i = 1; i < nums.length; i++) {
            this.diff[i] = nums[i] - nums[i - 1]
        }
    }

    increment(i, j, val) {
        this.diff[i] += val
        if (j + 1 < this.diff.length) {
            this.diff[j + 1] += val
        }
    }

    result() {
        const res = new Array(this.diff.length)

        res[0] = this.diff[0]
        for (let i = 1; i < this.diff.length; i++) {
            res[i] = res[i - 1] + this.diff[i]
        }

        return res
    }
}

const diff = new DifferenceArray()
const arr = [2, 6, 9, 18]

diff.formatDifferenceArray(arr)
diff.increment(2, 3, 2)
console.log(diff.result())

console.log(diff)