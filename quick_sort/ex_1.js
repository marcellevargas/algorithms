function quickSort(arr) {
    if(arr.length < 2) {
        return arr
    }
    let pivot = arr[0];
    console.log("pivot", pivot)
    let left = [];
    let right = [];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    // return [...quickSort(left), pivot, ...quickSort(right)]
    return quickSort(left).concat([pivot], quickSort(right))

}

const arr = [20, 8]
console.log(quickSort(arr))