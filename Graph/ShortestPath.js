function shortestPath(graph, a, b) {
    // WRITE YOUR BRILLIANT CODE HERE
    //console.log(a);
    let queue = [a];
    let visited = [];
    visited[a]=true;
    let level = 1;
    while(queue.length > 0){
        let edge = queue.shift();
        if(edge == b) return level;
        
        if(edge>-1){
            for(let nei of graph[edge]){
                if(nei == b) return level;
                if(!visited[nei]){
                    visited[nei]= true;
                    queue.push(nei);
                }
            }
            level++;
        }
    }
    return level;
}
shortestPath([ [ 1, 2 ], [ 0, 2, 3 ], [ 0, 1 ], [ 1 ] ], 0, 3)
