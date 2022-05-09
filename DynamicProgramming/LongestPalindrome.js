var longestPalindrome = function(s) {    
    function longestAtIndex(s, l, r){
            while( l >= 0 && r < s.length && s[l] == s[r]){
                l -= 1
                r += 1
            }
            l += 1
            r -= 1
            return {length:r - l + 1, l:l, r:r};
    }
      
        longest = 0
        left = 0
        right = -1
        for(let i=0; i<s.length; i++){
            let result = longestAtIndex(s, i, i)
            if( result.length > longest){
                    longest = result.length
                    left = result.l
                    right = result.r
            }
            result = longestAtIndex(s, i, i + 1)
            if( result.length > longest){
                    longest = result.length
                    left = result.l
                    right = result.r
            }
        }
        return s.substring(left,right + 1)
};
