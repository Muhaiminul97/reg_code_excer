function Reverse(arr)
{
    const str = String(arr);
    let reversedStr = "";

    for(let i=str.length-1;i>=0;i--)
   {
       let temp = str[i];
       //console.log(temp)
       reversedStr+=temp
   }
    return reversedStr;
}
const arr ="test"
console.log(`${Reverse(arr)}`)