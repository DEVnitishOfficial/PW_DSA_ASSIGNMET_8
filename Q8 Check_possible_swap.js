/* <aside>
💡 **Question 8**

Given two strings s and goal, return true *if you can swap two letters in* s *so the result is equal to* goal*, otherwise, return* false*.*

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

- For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

**Example 1:**

**Input:** s = "ab", goal = "ba"

**Output:** true

**Explanation:** You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

</aside> */

function buddyStrings(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    if (s === goal) {
      const charCount = new Set(s).size;
      return charCount < s.length;
    }
  
    let firstIndex = -1;
    let secondIndex = -1;
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        if (firstIndex === -1) {
          firstIndex = i;
        } else if (secondIndex === -1) {
          secondIndex = i;
        } else {
          return false;
        }
      }
    }
  
    return (
      secondIndex !== -1 &&
      s[firstIndex] === goal[secondIndex] &&
      s[secondIndex] === goal[firstIndex]
    );
  }
  const s = "ab";
  const goal = "ba";
  const isPossible = buddyStrings(s, goal);
  console.log(isPossible); 
  