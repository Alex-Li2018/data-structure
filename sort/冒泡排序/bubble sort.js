/**
 * 
  排序前：{4,5,6,3,2,1}
  排序后：{1,2,3,4,5,6}
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