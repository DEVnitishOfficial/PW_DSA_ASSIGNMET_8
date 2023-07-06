/* <aside>
💡 **Question 6**

Given two strings s and p, return *an array of all the start indices of* p*'s anagrams in* s. You may return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

**Input:** s = "cbaebabacd", p = "abc"

**Output:** [0,6]

**Explanation:**

The substring with start index = 0 is "cba", which is an anagram of "abc".

The substring with start index = 6 is "bac", which is an anagram of "abc".

</aside> */

function findAnagrams(s, p) {
    const result = [];
    const sFreq = new Array(26).fill(0);
    const pFreq = new Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0);
  
    // Calculate the frequency of characters in p
    for (let i = 0; i < p.length; i++) {
      pFreq[p.charCodeAt(i) - aCode]++;
    }
  
    let left = 0;
    let right = 0;
  
    while (right < s.length) {
      // Expand the sliding window by moving the right pointer
      sFreq[s.charCodeAt(right) - aCode]++;
  
      // Shrink the sliding window if its size is greater than p's length
      if (right - left + 1 > p.length) {
        sFreq[s.charCodeAt(left) - aCode]--;
        left++;
      }
  
      // Check if the frequencies of characters in the window match p's frequencies
      if (right - left + 1 === p.length && arraysEqual(sFreq, pFreq)) {
        result.push(left);
      }
  
      right++;
    }
  
    return result;
  }
  
  // Helper function to check if two arrays have equal values
  function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  
    return true;
  }
  const s = "cbaebabacd";
  const p = "abc";
  const indices = findAnagrams(s, p);
  console.log(indices); 
  