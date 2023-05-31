
function minMaxSum([a,b,c,d]){

    let sum = a+b+c+d
    let min = Math.min(a,b,c,d)
    let max = Math.max(a,b,c,d)
    let result = [min,max,sum]
    return result
}
console.log(minMaxSum([2,3,4,5]))


function minMaxSumv1(arr){

    let sum = 0;
    let min = Infinity;
    let max = -Infinity;

    for(let index = 0; index < arr.length; index ++){

        sum = sum + arr[index];
        min = Math.min(arr[index],min);
        max = Math.max(arr[index],max);

    }

    let result =[min,max,sum];
    return result;
}
console.log(minMaxSumv1([2,3,4]));


function minMaxSumv2(arr){

    let sum = 0;
    let min = Infinity;
    let max = -Infinity;

    arr.forEach(element => {
        sum = sum + element
        min = Math.min(element,min)
        max = Math.max(element,max)
    });

    let result =[min,max,sum];
    return result;
}
console.log(minMaxSumv2([2,3,4]));