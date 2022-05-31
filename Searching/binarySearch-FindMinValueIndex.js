function findMinRotated(arr) {
    let right = arr.length-1;
    let smallestIndex = right;
    let left = 0;
    while(left<=right)
    {
        let mid = parseInt((left+right)/2);
        if(arr[mid]<arr[smallestIndex]){
            smallestIndex = mid;
            right = mid-1;
        }else{
            left = mid+1;
        }
    }
    return smallestIndex;
}
