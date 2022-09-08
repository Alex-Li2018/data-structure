/**
 * 插入排序
 * 
  排序前：{4,3,2,10,12,1,5,6}
  排序后：{1,2,3,4,5,6,10,12}

  流程：
  1. 非为两个部分， 每次遍历时，遍历变量之前的数据都排序好
  2. 将遍历的数据与排序好的数据进行比较 如果大进行位置交换

  时间：
  第一次循环 内层 1
  第二次循环 内层 2
  第三次循环 内层 3
  ...
  第n次循环 内层 n
  n + n-1 + n-2 + ... + 1 = N^2/2-N/2
 */

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        const temp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = temp
      } else {
        break
      }

      console.log(i, j,arr)
    }
  }

  return arr
}

console.log(insertSort([4,3,2,10,12,1,5,6]))