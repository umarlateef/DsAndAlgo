let letters = 'abc'
function dfs(path,used,res){
        if(path.length === letters.length) return res.push(path.join(''));
        
        for(let i=0; i<letters.length; i++){
            if(used[i]) continue;
            path.push(letters[i]);
            used[i] = true;
            dfs(path, used, res);
            path.pop(letters[i]);
            used[i] = false;
        }
    }
    let response = [];
    dfs([], new Array(letters.length).fill(false), response);
    console.log(response);
