const intersect = (current, set) => {
  const arrayCurrent = Array.isArray(current) ? [...current] : current.split('');
  return [...arrayCurrent].filter(el => set.has(el));
};

module.exports = function(data) {
  const groups = data
    .replace(/\r/g, '')
    .split(/\n\n/);
  const anyYes = groups
    .reduce((sum, g) => (new Set(g.replace(/\s/g, ''))).size + sum, 0);
  console.log(`Part A: ${anyYes}`);
  const passenerGroups = groups.map(g => g.split(/\n/));
  const count = passenerGroups.reduce((sum, group) => sum + group.reduce((first, passenger) => intersect(first, new Set(passenger))).length, 0);
  console.log(`Part B: ${count}`)
}