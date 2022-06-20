# [big O](https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/)

![big o](./big%20O.jpeg)

## 定义

Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. 

例子：

```js
O(n^2) 

g(n) = n^2

const arr = [4, 1, 3, 2, 6, 7, 5, 8]
const newArr = []

for(let i = 0; i < arr.length; i++) {
    let smallElement = arr[i]
    for(let j = i; j < arr.length; j++) {
        if (smallElement > arr[j]) {
            smallElement = arr[j]
        }
    }

    newArr.push(smallElement)
}
```

## O(logN) 二进制搜索

二进制搜索通过比较集合的最中间项来查找特定项。 如果匹配发生，则返回项目的索引。 如果中间项大于项，则在中间项左侧的子阵列中搜索项。 否则，在中间项右侧的子阵列中搜索项。 该过程也在子阵列上继续，直到子阵列的大小减小到零。

```js
[1, 2, 3, 4, 5, 6, 7]

[1, 2, 3] [5, 6, 7]

[1] [3]

input size 8 log2^3 => 8
input size 16 log2^4 => 16

const target = 3
let arr = [1, 2, 3, 4, 5, 6, 7]
// 低位下标
let lowIndex = 0
// 高位下标
let highIndex = arr.length - 1

while(lowIndex <= highIndex) {
    const midIndex = Math.floor((highIndex + lowIndex) / 2)

    if (target < arr[midIndex]) {
       highIndex =  midIndex - 1
    } else if (target > arr[midIndex]){
        lowIndex = midIndex + 1
    } else {
        return midIndex
    }
}
```
## 二分法变体

- 变体一：查找第一个值等于给定值的元素
- 变体二：查找最后一个值等于给定值的元素
- 变体三：查找第一个大于等于给定值的元素
- 变体四：查找最后一个小于等于给定值的元素
