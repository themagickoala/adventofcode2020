const readline = require('readline');

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}

const part1 = (instructions) => {
  let x = 0;
  let y = 0;
  let direction = 90;
  for (let i = 0; i < instructions.length; i++) {
    let ins = instructions[i];
    switch (ins[0]) {
      case 'N':
        y += Number(ins.substr(1));
        break;
      case 'E':
        x += Number(ins.substr(1));
        break;
      case 'S':
        y -= Number(ins.substr(1));
        break;
      case 'W':
        x -= Number(ins.substr(1));
        break;
      case 'L':
        direction -= Number(ins.substr(1));
        if (direction < 0) direction += 360;
        break;
      case 'R':
        direction += Number(ins.substr(1));
        if (direction >= 360) direction -= 360;
        break;
      case 'F':
        let ord = direction > 90 ? -1 : 1;
        if (direction % 180 === 0) y += ord * Number(ins.substr(1));
        else x += ord * Number(ins.substr(1));
        break;
    }
  }
  console.log(Math.abs(x) + Math.abs(y));
};

const part2 = async (instructions) => {
  let x = 0;
  let y = 0;
  let wx = 10;
  let wy = 1;
  for (let i = 0; i < instructions.length; i++) {
    let ins = instructions[i];
    let times;
    let newWX = wx;
    let newWY = wy;
    switch (ins[0]) {
      case 'N':
        wy += Number(ins.substr(1));
        break;
      case 'E':
        wx += Number(ins.substr(1));
        break;
      case 'S':
        wy -= Number(ins.substr(1));
        break;
      case 'W':
        wx -= Number(ins.substr(1));
        break;
      case 'L':
        times = Number(ins.substr(1)) / 90;
        switch (times % 4) {
          case 1:
            newWX = -wy;
            newWY = wx;
            break;
          case 2:
            newWX = -wx;
            newWY = -wy;
            break;
          case 3:
            newWX = wy;
            newWY = -wx;
            break;
        }
        wx = newWX;
        wy = newWY;
        break;
      case 'R':
        times = Number(ins.substr(1)) / 90;
        switch (times % 4) {
          case 1:
            newWX = wy;
            newWY = -wx;
            break;
          case 2:
            newWX = -wx;
            newWY = -wy;
            break;
          case 3:
            newWX = -wy;
            newWY = wx;
            break;
        }
        wx = newWX;
        wy = newWY;
        break;
      case 'F':
        times = Number(ins.substr(1));
        x += times * wx;
        y += times * wy;
        break;
    }
    // console.log(`After step ${i + 1}, instruction ${ins}:`);
    // console.log(`E: ${x}, N: ${y}`);
    // console.log(`Waypoint: ${wx}, ${wy}`);
    // await askQuestion('Press enter');
    // console.log();
  }
  console.log(Math.abs(x) + Math.abs(y));
};

module.exports = function (data) {
  const instructions = data.replace(/\r/g, '').split(/\n/);
  part1(instructions);
  part2(instructions);
}