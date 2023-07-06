/* <aside>
💡 **Question 4**

You need to construct a binary tree from a string consisting of parenthesis and integers.

The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.
You always start to construct the **left** child node of the parent first if it exists.


**Input:** s = "4(2(3)(1))(6(5))"

**Output:** [4,2,6,3,1,5]

</aside> */

class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function constructBinaryTree(s) {
    if (!s || s.length === 0) {
      return null;
    }
  
    let root = null;
    let stack = [];
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        stack.push(root);
      } else if (s[i] === ')') {
        stack.pop();
      } else {
        let numEnd = i;
        while (numEnd + 1 < s.length && !isNaN(parseInt(s[numEnd + 1]))) {
          numEnd++;
        }
        const num = parseInt(s.substring(i, numEnd + 1));
        const node = new Node(num);
  
        if (root === null) {
          root = node;
        } else {
          const parent = stack[stack.length - 1];
          if (parent.left === null) {
            parent.left = node;
          } else {
            parent.right = node;
          }
        }
  
        if (s[numEnd + 1] === ')') {
          stack.pop();
          i = numEnd + 1; // Skip the closing parenthesis
        } else {
          i = numEnd; // Skip the number
        }
      }
    }
  
    return root;
  }
  
  function inorderTraversal(node) {
    if (node === null) {
      return [];
    }
  
    const left = inorderTraversal(node.left);
    const right = inorderTraversal(node.right);
  
    return [...left, node.val, ...right];
  }
  const s = "4(2(3)(1))(6(5))";
  const root = constructBinaryTree(s);
  const inorder = inorderTraversal(root);
  console.log(inorder); 
  