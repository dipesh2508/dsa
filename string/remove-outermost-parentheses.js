// linear search
// time complexity O(n)
// space complexity O(1)

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let x = ''
    let count = 0;
    for (let i=0; i<s.length; i++){
        if(s[i]=='(' && count==0){
            count++;
        } else if(s[i]=='(' && count>=1){
            x = x+ '(';
            count++;
        } else if(s[i]==')' && count > 1){
            x = x + ')';
            count--;
        } else if(s[i]==')'&& count ==1){
            count--;
        }
    }

    return x;
};

//driver code
console.log(removeOuterParentheses("(()())(())")) //()()()
console.log(removeOuterParentheses("(()())(())(()(()))")) //()()()()(())