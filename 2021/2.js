function partA(instructions) {
  return instructions.reduce((location, instruction) => {
    const newLocation = [...location];
    switch(instruction.direction) {
      case 'down':
        newLocation[1] += instruction.value;
        break;
      case 'up':
        newLocation[1] -= instruction.value;
        break;
      case 'forward':
        newLocation[0] += instruction.value;
        break;
      default:
        throw new Error(`Unrecognised direction ${instruction.direction}`);
    }
    return newLocation;
  }, [0, 0]);
}

function partB(instructions) {
  return instructions.reduce((location, instruction) => {
    const newLocation = [...location];
    switch(instruction.direction) {
      case 'down':
        newLocation[2] += instruction.value;
        break;
      case 'up':
        newLocation[2] -= instruction.value;
        break;
      case 'forward':
        newLocation[0] += instruction.value;
        newLocation[1] += instruction.value * newLocation[2];
        break;
      default:
        throw new Error(`Unrecognised direction ${instruction.direction}`);
    }
    return newLocation;
  }, [0, 0, 0]);
}

module.exports = function (data) {
  const instructions = data.replace(/\r/g, '').split(/\n/).map((line) => {
    const re = /(forward|down|up) (\d+)/;
    const matches = re.exec(line);
    return {
      direction: matches[1],
      value: +matches[2],
    };
  });
  const resultA = partA(instructions);
  console.log(resultA);
  console.log(resultA[0] * resultA[1]);
  const resultB = partB(instructions);
  console.log(resultB);
  console.log(resultB[0] * resultB[1]);
}