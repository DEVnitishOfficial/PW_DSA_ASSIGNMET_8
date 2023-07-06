/* <aside>
💡 **Question 2**

Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid***.

The following rules define a **valid** string:

- Any left parenthesis '(' must have a corresponding right parenthesis ')'.
- Any right parenthesis ')' must have a corresponding left parenthesis '('.
- Left parenthesis '(' must go before the corresponding right parenthesis ')'.
- '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

**Example 1:**

**Input:** s = "()"

**Output:**

true

</aside> */

function isValid(s) {
    const stack = [];
    const asteriskStack = [];
    
    for (const char of s) {
      if (char === '(') {
        stack.push(char);
      } else if (char === '*') {
        asteriskStack.push(char);
      } else {
        if (stack.length > 0) {
          stack.pop();
        } else if (asteriskStack.length > 0) {
          asteriskStack.pop();
        } else {
          return false;
        }
      }
    }
    
    while (stack.length > 0 && asteriskStack.length > 0) {
      const leftIndex = stack.pop();
      const asteriskIndex = asteriskStack.pop();
      
      if (leftIndex > asteriskIndex) {
        return false;
      }
    }
    
    return stack.length === 0;
  }
  const s = "()";
  console.log(isValid(s));
  
  