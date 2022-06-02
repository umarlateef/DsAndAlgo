function minMaxWeight(weights, d) {
    let left = Math.max(...weights);
    let right = weights.reduce((a, b)=>a+b , 0);
    let daysToDeliver = d;
    let truckCapacity = 0;
    let answer = left;
    while(left<=right){
        let mid = parseInt((left+right)/2);
        let days = 0;
        let dayWeigth = 0;
        for (let weight of weights) {
            dayWeigth += weight;
            if(dayWeigth>mid){
                days++; 
                dayWeigth = weight;
            }
            else if(dayWeigth===mid){
                days++; 
                dayWeigth = 0;
            }
        }
        if(dayWeigth>0)
            days++
        if(days === daysToDeliver){
            answer = mid;
            right = mid-1;
        }
        else if(days > daysToDeliver){
            left = mid+1;
        }
        else{
            right = mid-1;
        }
    }
    return answer;
}

minMaxWeight([5, 5, 5, 5, 5, 5 ,5, 5 ,5], 5)
