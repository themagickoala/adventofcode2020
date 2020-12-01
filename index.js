const day = process.argv[2];

const aocLoader = require('aoc-loader');

async function runDay(dayNo) {
  try {
    const data = await aocLoader(2020, dayNo);
    const dayCode = require(`./days/${day}.js`);
    dayCode(data);
  } catch (ex) {
    console.log(ex.message);
  }
}

runDay(day);