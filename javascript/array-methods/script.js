function groupByCategory(products) {
  return products.reduce((acc, { name, category }) => {
    acc[category] = acc[category] || [];
    acc[category].push(name);
    return acc;
  }, {});
}

const products = [
  { name: "iPhone", category: "Electronics" },
  { name: "Shirt", category: "Clothing" },
  { name: "Laptop", category: "Electronics" },
];

function sortUsers(users) {
  users.sort((user1, user2) => {
    const { name: name1, score: score1 } = user1;
    const { name: name2, score: score2 } = user2;
    if (score1 !== score2) return score2 - score1;
    return name1.localeCompare(name2);
  });
}

const users = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 90 },
  { name: "Charlie", score: 95 },
];

function groupConsecutiveDuplicates(arr) {
  return arr.reduce((acc, ch) => {
    const lastGroup = acc[acc.length - 1];

    if (!lastGroup || lastGroup[0] !== ch) {
      acc.push([ch]); // start a new group
    } else {
      lastGroup.push(ch); // add to current group
    }

    return acc;
  }, []);
}

["a", "a", "b", "b", "b", "a"];

function generateFrequencyTable(arr) {
  return arr.reduce((acc, ch) => {
    acc[ch] = acc[ch] ? acc[ch] + 1 : 1;
    return acc;
  }, {});
}

console.log(generateFrequencyTable(["a", "b", "a", "c", "b", "a"]));
