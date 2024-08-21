let arr = [1 ,2, 3, 4, 4]

for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++){
       if( (i!=j) && (arr[i] == arr[j])){
        console.log(arr[i])
        break;
       }
    }
}