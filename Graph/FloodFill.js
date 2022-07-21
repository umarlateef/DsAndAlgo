function floodFill(r, c, replacement, image) {
    // WRITE YOUR BRILLIANT CODE HERE
    let pixel = image[r][c];
    let visited = Array.from(Array(image.length), () => Array(image[0].length).fill(false));
    function replace(row, col){
        if(row>=0 && image.length>row && col>=0 && image[row].length>col && image[row][col] === pixel){
            if(visited[row][col])return;
            visited[row][col] = true;
            image[row][col] = replacement;
            replace(row-1, col);
            replace(row+1, col);
            replace(row, col-1);
            replace(row, col+1);
        }
    }
    replace(r, c);
    return image;
}
//floodFill(2, 2, 9, [[0, 1, 3, 4, 1],[3, 8, 8, 3, 3],[6, 7, 8, 8, 3],[12, 2, 8, 9, 1],[12, 3, 1, 3, 2]])
floodFill(0,0,0,[[0,0,0],[0,0,0]])
