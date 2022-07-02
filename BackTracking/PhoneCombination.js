var letterCombinations = function(digits) {
    if(!digits) return [];
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
    for(let num of digits){        
        arrays.push(letters[num]);
    }
    function dfs(path, index, resp){
        if(path.length === digits.length) return resp.push(path.toLowerCase());
        //console.log(arrays);        
        for(let letter of arrays[index]){
            dfs(path+letter, index+1, resp);
        }
    }
    let resp = [];
    dfs('', 0, resp);
    return resp;
};
