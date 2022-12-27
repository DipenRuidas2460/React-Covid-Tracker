var validParenthisis = (s) => {
    let stack = []
    let parens = "() {} []"
    let i = 0
    while (i < s.length) {
        stack.push(s[i]);
        let open = stack[stack.length - 2]
        let closed = stack[stack.length - 1]
        let postParen = open + closed;
        if (parens.includes(postParen)) {
            stack.pop();
            stack.pop();
        }
        i++;
    }
    return stack.length === 0;
}

// Method-2 

var isValid = function (s) {
    let stack = []
    let paren = "() {} []"
    let i = 0
    while (i < s.length) {
        stack.push(s[i])
        let open = stack[stack.length - 2]
        let closed = stack[stack.length - 1]
        let postParen = open + closed;
        if (paren.includes(postParen)) {
            stack.pop();
            stack.pop();
        }
        i++;
    }
    return stack.length === 0;
};

console.log(isValid("()[]{}"));
console.log(validParenthisis("()[]{}"));