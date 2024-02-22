function MaxValArr(arr) {
   let maxVal = arr[0]; // Initialize maxVal with the first element of the array
   for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxVal) {
         maxVal = arr[i]; // Update maxVal if the current element is greater
      }
   }
   return maxVal; // Return the maximum value found in the array
}

const arr = [4, 5, 3, 9];
console.log(MaxValArr(arr)); // Output: 9
