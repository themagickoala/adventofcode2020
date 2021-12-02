const treesOnSlope = (rows, down, right, length) => {
  return rows.reduce((trees, row, index) => (index % down === 0 && row[(index * right) % length] === '#') ? trees + 1 : trees, 0)
}

module.exports = function(data) {
  const rows = data.replace(/\r/g, '').split(/\n/);
  const length = rows[0].length;
  const r3d1 = treesOnSlope(rows, 1, 3, length);
  console.log('Part A');
  console.log(`  ${r3d1}`);
  const r1d1 = treesOnSlope(rows, 1, 1, length);
  const r5d1 = treesOnSlope(rows, 1, 5, length);
  const r7d1 = treesOnSlope(rows, 1, 7, length);
  const r1d2 = treesOnSlope(rows, 2, 1, length);
  console.log('Part B');
  console.log(`  Right 1, down 1: ${r1d1}`);
  console.log(`  Right 3, down 1: ${r3d1}`);
  console.log(`  Right 5, down 1: ${r5d1}`);
  console.log(`  Right 7, down 1: ${r7d1}`);
  console.log(`  Right 1, down 2: ${r1d2}`);
  console.log(`  Product: ${r1d1 * r3d1 * r5d1 * r7d1 * r1d2}`);
};
