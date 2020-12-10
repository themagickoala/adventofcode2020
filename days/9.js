module.exports = function(data) {
  const entries = data.replace(/\r/g, '').split(/\n/);
  let answer = -1;
  let endIndex = -1;
  for (let i = 25; i < entries.length; i++) {
    const num = +entries[i];
    let isSum = false;
    for (let j = i - 25; j < i - 1; j++) {
      const first = +entries[j];
      for (let k = j + 1; k < i; k++) {
        const second = +entries[k];
        if (num == first + second) {
          isSum = true;
          break;
        }
      }
      if (isSum) {
        break;
      }
    }
    if (!isSum) {
      endIndex = i;
      answer = num;
      break;
    }
  }
  console.log(`Part A: ${answer}`);
  for (let i = endIndex - 1; i > 0; i--) {
    const end = +entries[i];
    if (end > answer) {
      continue;
    }
    let sum = end;
    let startI = i - 1;
    let range = [end];
    while (sum < answer && startI >= 0) {
      const start = +entries[startI];
      sum += start;
      range.push(start);
      if (sum === answer) {
        console.log(`Part B: ${Math.min(...range) + Math.max(...range)}`);
        return;
      } else if (sum > answer) {
        break;
      }
      startI--;
    }
  }
};
