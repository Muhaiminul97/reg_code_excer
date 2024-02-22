function isPalindrome(arr)
{
    let str =  String(arr.toLowerCase());
    let left =0;
    let right = str.length -1;
    while(left<right)
    {
        if(str.charAt(left)!==str.charAt(right))
        {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

const arr = "Radar";
console.log(`${arr} is palindrome? ${isPalindrome(arr)}`)