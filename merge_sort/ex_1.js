function mergeSort(arr) {
    if(arr.length < 2) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);

    const leftArr = arr.slice(0, middle);
    const rightArr = arr.slice(middle);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr){
    const sortedArr = [];
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else {
            sortedArr.push(rightArr.shift())
        }
    }

    // return [...sortedArr, ...leftArr, ...rightArr]
    return sortedArr.concat(leftArr, rightArr)
}

const arr = [8, 20, -2, 4, -6];
console.log(mergeSort(arr));