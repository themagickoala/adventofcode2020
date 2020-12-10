const map = {};

function pathsFrom(joltages, current) {
  if (joltages[current] === undefined) throw new Error(`I don't have that adapter (${current})`);
  if (map[current]) return map[current];
  let paths = 0;
  for (let i = current + 1; i < joltages[joltages.length - 1] && joltages[i] - joltages[current] <= 3; i++) {
    if (joltages[i]) { paths += pathsFrom(joltages, i); }
  }
  paths = paths || 1;
  map[current] = paths;
  return paths;
}

module.exports = function (data) {
  let joltages = data.replace(/\r/g, '').split(/\n/).map(Number).sort((a, b) => a - b);
  joltages.unshift(0);
  joltages.push(joltages[joltages.length - 1] + 3);
  let ones = 0;
  let threes = 0;
  for (let i = 1; i < joltages.length; i++) {
    if (joltages[i] - joltages[i - 1] === 1) ones++;
    else if (joltages[i] - joltages[i - 1] === 3) threes++;
  }
  console.log(ones * threes);
  console.log(pathsFrom(joltages, 0));
};
