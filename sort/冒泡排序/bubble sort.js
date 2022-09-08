/**
 * 
  排序前：{4,5,6,3,2,1}
  排序后：{1,2,3,4,5,6}

  逻辑： 
  第一次 循环找到第一大的
  第二次 循环找到第二大的
  第三次 循环找到第三大的
  。。。

  执行次数 第一次 内层 n次
  执行次数 第二次 内层 n-1次
  执行次数 第三次 内层 n-2次

  n + n-1 + n-2 + ... + 1 = N^2/2-N/2

*/

function BubbleSort(arr) {
    for(let i = arr.length - 1; i >=0; i--) {
        for (let j = 0; j < i; j++) {
          if (arr[j] > arr[j + 1]) {
            const temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
          }  
        }
    }

    return arr
}

console.log(BubbleSort([4,5,6,3,2,1]))