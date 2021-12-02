function partA(depths) {
  return depths.filter((d, i) => i > 0 && d > depths[i - 1]).length;
}

function partB(depths) {
  return depths.filter((d, i) => i > 2 && d > depths[i - 3]).length;
}

module.exports = function (data) {
  const depths = data.replace(/\r/g, '').split(/\n/).map((n) => +n);
  console.log(partA(depths));
  console.log(partB(depths));
}