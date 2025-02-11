/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const charMap1 = {};
  const charMap2 = {};
  for (let char of str1) {

    charMap1[char.toLowerCase()] = (charMap1[char.toLowerCase()] || 0) + 1;
  }

  for (let char of str2) {
    charMap2[char.toLowerCase()] = (charMap2[char.toLowerCase()] || 0) + 1;
  }
  for (let key in charMap1) {
    if (charMap1[key] !== charMap2[key]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
