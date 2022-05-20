function binarySearch(arr, target) {
    if(!arr || arr.length===0) return -1;
    var left = 0,
        right = arr.length-1;
    while(left <= right){
        let mid = parseInt((left+right)/2);
        if(arr[mid] === target)
            return mid;
        if(arr[mid] > target)
            right = mid-1;
        else
            left = mid+1;
    }
        return -1;
}
