function areBracketsBalanced(str) {
    // Map for matching closing brackets to opening brackets
    const bracketMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    // Stack to keep track of opening brackets
    const stack = [];

    // Iterate through each character in the string
    for (let char of str) {
        if (Object.values(bracketMap).includes(char)) {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        } else if (Object.keys(bracketMap).includes(char)) {
            // If it's a closing bracket
            if (stack.length > 0 && stack[stack.length - 1] === bracketMap[char]) {
                // If the stack is not empty and the top of the stack matches the corresponding opening bracket
                stack.pop();
            } else {
                // If it doesn't match or stack is empty when it should not be
                return false;
            }
        }
    }

    // If the stack is empty, all brackets were balanced
    return stack.length === 0;
}

// Example usage
const strExample1 = "{([])}";
console.log(areBracketsBalanced(strExample1));

const strExample2 = "{([)]}";
console.log(areBracketsBalanced(strExample2));
