const day = process.argv[3];
const year = process.argv[2];

const aocLoader = require('aoc-loader');

async function runDay(yearNo, dayNo) {
  try {
    const data = await aocLoader(yearNo, dayNo);
    const dayCode = require(`./${yearNo}/${dayNo}.js`);
    dayCode(data);
  } catch (ex) {
    console.log(ex);
  }
}

runDay(year, day);