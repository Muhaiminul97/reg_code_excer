function ReverseLink(arr){
    const list = arr;
    let rev = [];
    for(let i=list.length-1;i>=0;i--)
    {
        let temp = list[i];
        rev.push(temp);

    }
    return rev;
}
const arr = [2,3,4,5];
console.log(`${ReverseLink(arr)}`)