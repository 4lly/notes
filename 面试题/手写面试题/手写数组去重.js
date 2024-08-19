
function repeat1 (arr) {
  return [...new Set(arr)];
}

function repeat2 (arr) {
  return Array.from(new Set(arr));
}

function repeat3 (arr) {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}