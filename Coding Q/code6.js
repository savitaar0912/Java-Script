const lengthOfLongestSubstring = (s) => {
    let maxLength = 0;
    let left = 0;
    let charSet = new Set();

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            console.log('line8',charSet)
            charSet.delete(s[left]);
            console.log('line10',charSet)
            left++;
        }
        charSet.add(s[right]);
        console.log('line14',charSet)
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3