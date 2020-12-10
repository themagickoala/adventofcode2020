function getContainingBags(colour, ruleMap) {
  if (ruleMap[colour].parents.length === 0) {
    return [];
  }

  return ruleMap[colour].parents.concat(ruleMap[colour].parents.reduce((list, parent) => list.concat(getContainingBags(parent, ruleMap)), []));
}

function getBagContents(colour, ruleMap) {
  if (ruleMap[colour].children.length === 0) {
    return 0;
  }

  return ruleMap[colour].children.reduce((count, child) => count + child.count * (1 + getBagContents(child.colour, ruleMap)), 0);
}

module.exports = function(data) {
  const rules = data.replace(/\r/g, '').split(/\n/);
  const ruleMap = {};
  rules.forEach(rule => {
    const [colour, rest] = rule.replace('.', '').split(' bags contain ');
    const contents = rest.split(', ').map(c => c.replace(/ bags?/, ''));
    if (/no other/.test(contents)) return;
    const ruleObj = {
      children: contents.map(c => {
        const matches = /(\d) ((\w+)(\s\w+)*)/.exec(c);
        if (ruleMap[matches[2]]) {
          ruleMap[matches[2]].parents.push(colour);
        } else {
          ruleMap[matches[2]] = {
            children: [],
            parents: [colour],
          };
        }
        return {
          count: +matches[1],
          colour: matches[2],
        };
      }),
      parents: [],
    };
    if (ruleMap[colour]) {
      ruleMap[colour].children = ruleObj.children;
    } else {
      ruleMap[colour] = ruleObj;
    }
  });
  console.log(JSON.stringify(ruleMap, null, 2));
  console.log(new Set(getContainingBags('shiny gold', ruleMap)).size);
  console.log(getBagContents('shiny gold', ruleMap));
};