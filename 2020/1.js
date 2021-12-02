function findTwoSumFromArray(sum, array) {
  const counterparts = [];
  for (let i = 0; i < array.length; i++) {
    const entry = array[i];
    for (let j = 0; j < counterparts.length; j++) {
      if (counterparts[j] === entry) return [sum - entry, counterparts[j]];
    }
    counterparts.push(sum - entry);
  }

  throw new Error(`Could not find two numbers summing to ${sum}`);
}

function findThreeSumFromArray(sum, array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      for (let k = 0; k < j; k++) {
        if (array[i] + array[j] + array[k] === sum) return [array[i], array[j], array[k]];
      }
    }
  }

  throw new Error(`Could not find three numbers summing to ${sum}`);
}

module.exports = function (data) {
  const array = data.replace(/\r/g, '').split(/\n/).map((n) => +n);
  const [a, b] = findTwoSumFromArray(2020, array);
  console.log('Part A:');
  console.log(`  Found numbers ${a} and ${b}`);
  console.log(`  Product: ${a * b}`);
  const [c, d, e] = findThreeSumFromArray(2020, array);
  console.log('Part B:');
  console.log(`  Found numbers ${c}, ${d} and ${e}`);
  console.log(`  Product: ${c * d * e}`);
};