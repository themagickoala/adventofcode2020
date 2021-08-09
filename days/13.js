module.exports = function (data) {
  const [timePart, busPart] = data.replace(/\r/g, '').split(/\n/);
  const time = +timePart;
  const busStrings = busPart.split(',');
  const buses = busStrings.filter(b => b !== 'x').map(b => +b);
  const arrivalAfterTime = buses.map(b => ({
    bus: b,
    wait: b - (time % b),
  })).sort((a, b) => a.wait - b.wait);
  console.log(arrivalAfterTime[0].bus * arrivalAfterTime[0].wait);
  let mult = Math.floor(100000000000000 / +busStrings[0]);
  while (true) {
    const t = (+busStrings[0]) * mult;
    let found = true;
    for (let i = 1; i < busStrings.length; i++) {
      if (busStrings[i] === 'x') continue;
      const bus = +busStrings[i];
      if (bus === t + i) continue;
      found = false;
    }
    if (found) {
      console.log(t);
      break;
    };
  }
}