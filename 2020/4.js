function validateField(field, value) {
  switch (field) {
    case 'byr':
      return !isNaN(value) && +value >= 1920 && +value <= 2002;
    case 'iyr':
      return !isNaN(value) && +value >= 2010 && +value <= 2020;
    case 'eyr':
      return !isNaN(value) && +value >= 2020 && +value <= 2030;
    case 'hgt':
      const re = /(\d+)(cm|in)/;
      const matches = re.exec(value);
      if (!matches) return false;
      switch (matches[2]) {
        case 'cm':
          return +matches[1] >= 150 && +matches[1] <= 193;
        case 'in':
          return +matches[1] >= 59 && +matches[1] <= 76;
        default:
          return false;
      }
    case 'hcl':
      return /^\#[0-9a-f]{6}$/.test(value);
    case 'ecl':
      return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value);
    case 'pid':
      return /^[0-9]{9}$/.test(value);
  }
}

module.exports = function (data) {
  const passports = data.replace(/\r/g, '').split(/\n\n/)
    .map(p => p.split(/\s+/).reduce((fields, c) => {
      const kvp = c.split(':');
      fields[kvp[0]] = kvp[1];
      return fields;
    }, {}));
    console.log('Part A:');
    console.log('  ' + passports.reduce((totalValid, passport) => ['ecl', 'byr', 'eyr', 'hcl', 'hgt', 'iyr', 'pid'].reduce((valid, field) => valid && Object.keys(passport).includes(field), true) ? totalValid + 1 : totalValid, 0));
    console.log('Part B:')
    console.log('  ' + passports.reduce((totalValid, passport) => ['ecl', 'byr', 'eyr', 'hcl', 'hgt', 'iyr', 'pid'].reduce((valid, field) => valid && Object.keys(passport).includes(field) && validateField(field, passport[field]), true) ? totalValid + 1 : totalValid, 0));
}