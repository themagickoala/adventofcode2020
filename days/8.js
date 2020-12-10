const runProgram = (program) => {
  let pointer = 0;
  let accumulator = 0;
  let looped = false;
  const visits = new Array(program.length);
  while(!looped && pointer < program.length) {
    if (visits[pointer]) {
      looped = true;
      break;
    }
    visits[pointer] = true;
    const instruction = program[pointer];
    switch(instruction[0]) {
      case 'j':
        const jmp = Number(instruction.split(' ')[1]);
        pointer += jmp;
        break;
      case 'a':
        const acc = Number(instruction.split(' ')[1]);
        accumulator += acc;
        pointer++;
        break;
      case 'n':
        pointer++;
        break;
      default:
        throw new Error('Unrecognised instruction');
    }
  }

  return {
    state: looped ? 'loop' : 'terminated',
    accumulator
  }
}

module.exports = function(data) {
  const program = data.replace(/\r/g, '').split(/\n/);
  console.log(`Part A: ${runProgram(program).accumulator}`);
  let instructionToChange = -1;
  let terminated = false;
  while (!terminated) {
    instructionToChange++;
    let fixedProgram = [...program];
    if (program[instructionToChange][0] === 'j') {
      fixedProgram[instructionToChange] = fixedProgram[instructionToChange].replace('jmp', 'nop');
    } else if (program[instructionToChange][0] === 'n') {
      fixedProgram[instructionToChange] = fixedProgram[instructionToChange].replace('nop', 'jmp');
    } else {
      continue;
    }

    const { state, accumulator } = runProgram(fixedProgram);
    if (state === 'terminated') {
      terminated = true;
      console.log(`Part B: ${accumulator}`);
    }
  }
}