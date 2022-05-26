function findFirstOccurrence(arr, target) {
    let left =0,
        right = arr.length;
    let answer = -1;
    while(left<=right)
    {
        let mid = parseInt((left+right)/2);        
        if(arr[mid]>=target){
            if(arr[mid]===target)
                answer = mid;
            right = mid-1;
        }
        else{
            left = mid+1
        }
    }
    return answer;
}

findFirstOccurrence([1, 3, 3, 3, 3, 6, 10, 10, 10, 100], 3)
