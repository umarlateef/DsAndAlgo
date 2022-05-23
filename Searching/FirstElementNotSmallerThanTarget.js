function firstNotSmaller(arr, target) {
    let left =0,
        right = arr.length;
    let answer = -1;
    while(left<=right)
    {
        let mid = parseInt((left+right)/2);
        if(arr[mid]>=target){
            answer = mid;
            right = mid-1;
        }
        else{
            left = mid+1
        }
    }
    return answer;
}

firstNotSmaller([1, 3, 3, 5, 8, 8, 10], target);
