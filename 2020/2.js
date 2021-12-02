const testRowA = (row) => {
  const matches = /^(\d+)\-(\d+) (\w)\: (\w+)$/.exec(row);
  const letterCount = matches[4].split('').reduce((p, c) => c === matches[3] ? p + 1 : p, 0);
  const valid = letterCount >= +matches[1] && letterCount <= +matches[2];
  return valid;
}

const testRowB = (row) => {
  const matches = /^(\d+)\-(\d+) (\w)\: (\w+)$/.exec(row);
  const firstMatch = matches[4][+matches[1] - 1] === matches[3];
  const secondMatch = matches[4][+matches[2] - 1] === matches[3];
  const valid = (firstMatch && !secondMatch) || (secondMatch && !firstMatch);
  return valid;
}

module.exports = function (data) {
  const rows = data.replace(/\r/g, '').split(/\n/);
  console.log('Part A:')
  console.log('  ' + rows.reduce((p, c) => testRowA(c) ? p + 1 : p, 0));
  console.log('Part B:')
  console.log('  ' + rows.reduce((p, c) => testRowB(c) ? p + 1 : p, 0));
};