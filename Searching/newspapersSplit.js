function newspapersSplit(newspapers, coworkers) {
    let left = Math.max(...newspapers);
    let right = newspapers.reduce((a, b)=>a+b , 0);
    let truckCapacity = 0;
    let answer = left;
    while(left<=right){
        let mid = parseInt((left+right)/2);
        let workers = 0;
        let needWorker = 0;
        for (let newspaper of newspapers) {
            needWorker += newspaper;
            if(needWorker>mid){
                workers++; 
                needWorker = newspaper;
            }
            else if(needWorker===mid){
                workers++; 
                needWorker = 0;
            }
        }
        if(needWorker>0)
            workers++
        if(workers === coworkers){
            answer = mid;
            right = mid-1;
        }
        else if(workers > coworkers){
            left = mid+1;
        }
        else{
            right = mid-1;
        }
    }
    return answer;
}

newspapersSplit([7, 2, 5, 10, 8],2)
