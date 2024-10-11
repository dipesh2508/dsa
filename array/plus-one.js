var plusOne = function(digits) {
    let l = digits.length - 1;
    
    let rec = function(p) {
        if (digits[p] < 9) {
            digits[p] += 1;
            return digits;
        } else {
            digits[p] = 0;
            if (p === 0) {
                digits.unshift(1);
                return digits;
            }
            return rec(p - 1); 
        }
    };
    
    return rec(l);
};