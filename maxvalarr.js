function MaxValArr(arr) {
   let maxValArr = arr[0];
   for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxValArr) {
         maxValArr = arr[i];
      }
   }
   return maxValArr;
}

const arr = [4, 5, 3, 9];
console.log(MaxValArr(arr)); // Output: 9
