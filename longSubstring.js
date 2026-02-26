function longestSubstring(str) {

    let seen = {};
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < str.length; right++) {

        let char = str[right];

        if (seen[char] >= left) {
            left = seen[char] + 1;
        }

        seen[char] = right;

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(longestSubstring("abcabcbb"));