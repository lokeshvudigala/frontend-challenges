function capitalizeFirst(str) {
  if (typeof str !== "string" || !str.length) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str) {
  if (typeof str !== "string" || !str.length) return "";
  return str.split("").reverse().join("");
}

function countVowels(str) {
  if (typeof str !== "string" || !str.length) return 0;
  let count = 0;
  for (let ch of str) {
    if ("aeiou".includes(ch.toLowerCase())) count++;
  }
  return count;
}

function truncate(str, limit) {
  if (typeof str !== "string" || !str.length) return "";
  if (limit >= str.length) return str;
  return str.slice(0, limit) + "...";
}

function findLongestWord(str) {
  if (typeof str !== "string" || !str.length) return "";
  const longestWord = str
    .trim()
    .split(" ")
    .reduce(
      (longestWord, word) =>
        word.length > longestWord.length ? word : longestWord,
      ""
    );

  return longestWord;
}

function checkPalindrome(str) {
  if (typeof str !== "string" || !str.length) return false;
  return str === str.split("").reverse().join("");
}

function includesPolyfill(str, substr) {
  if (typeof str !== "string" || !str.length) return false;
  const n = str.length;
  const sn = substr.length;
  if (sn > n) return false;
  for (let i = 0; i <= n - sn; i++) {
    if (str.slice(i, i + sn) === substr) return true;
  }
  return false;
}

const sampleStrings = [
  "hello world",
  "JavaScript is awesome",
  "AEIOUaeiou",
  "Palindrome emordnilaP",
  "short",
  "a quick brown fox jumps over the lazy dog",
  "1234567890",
  "TestCase",
  "no vowels here",
  "racecar",
  "",
  "UPPERCASE",
  "lowercase",
  "MiXeD CaSe",
  "truncatethisstring",
];

sampleStrings.forEach((str) => {
    console.log(`Original: "${str}"`);
    console.log(`capitalizeFirst: "${capitalizeFirst(str)}"`);
    console.log(`reverse: "${reverse(str)}"`);
    console.log(`countVowels: ${countVowels(str)}`);
    console.log(`truncate: "${truncate(str, 5)}"`);
    console.log(`findLongestWord: "${findLongestWord(str)}"`);
    console.log(`checkPalindrome: ${checkPalindrome(str)}`);
    console.log(`includesPolyfill('is'): ${includesPolyfill(str, 'is')}`);
    console.log("---");
});
