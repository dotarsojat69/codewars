// Coding challenge for practice

function grow(x) {
  const result = x.reduce((acc, curr) => acc * curr);
  return result;
}

console.log(grow([1, 2, 3, 4]));
