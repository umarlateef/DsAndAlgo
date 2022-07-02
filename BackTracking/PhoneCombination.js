let digits = [2,5];
let letters = {
        '2':['A','B','C'],
        '3':['D','E','F'],
        '4':['G','H','I'],
        '5':['J','K','L'],
        '6':['M','N','O'],
        '7':['P','Q','R', 'S'],
        '8':['T','U','V'],
        '9':['W','X','Y','Z']
    }
    let arrays = [];
    let visited = [];
    for(let num of digits){
        
        arrays.push(letters[num]);
        visited.push(new Array(letters[num].length).fill(false))
        //arrays[num]= letters[num]
    }
    function dfs(path, index, resp){
        if(path[index] && path[index].length === digits.length) {
            index++;
            return resp.push(path);
        }
        console.log(index, visited[index].length)
        //return
        if(visited[index]){
            path[index] = '';
            for(let inIndex = 0; inIndex< digits.length; inIndex++){
                if(visited[inIndex][index]) continue;
                path[index] += arrays[inIndex][index];
                visited[inIndex][index]=true;
            
            }
            dfs(path, index, resp);
        }
        //for(
    }
    // WRITE YOUR BRILLIANT CODE HERE
    
    let resp = [];
    dfs([], 0, resp);
    console.log(resp);
