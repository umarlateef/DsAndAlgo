function find_boundary(arr) {
    let left =0,
        right = arr.length;
    let answer = -1;
    while(left<=right)
    {
        let mid = parseInt((left+right)/2);
        if(arr[mid]){
            answer = mid;
            right = mid-1;
        }
        else{
            left = mid+1
        }
    }
    return answer;
}
find_boundary([false, false, true, true, true])
