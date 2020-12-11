const nearestSeatMap = {};

const checkImmediateNeighbours = (i, j, seats) => {
  let occupied = 0;
  if (i > 0 && j > 0 && seats[i-1][j-1] === '#') occupied++;
  if (i > 0 && seats[i-1][j] === '#') occupied++;
  if (i > 0 && j < seats[0].length - 1 && seats[i-1][j+1] === '#') occupied++;
  if (j > 0 && seats[i][j-1] === '#') occupied++;
  if (occupied >= 4) return occupied;
  if (j < seats[0].length - 1 && seats[i][j+1] === '#') occupied++;
  if (occupied >= 4) return occupied;
  if (i < seats.length - 1 && j > 0 && seats[i+1][j-1] === '#') occupied++;
  if (occupied >= 4) return occupied;
  if (i < seats.length - 1 && seats[i+1][j] === '#') occupied++;
  if (occupied >= 4) return occupied;
  if (i < seats.length - 1 && j < seats[0].length - 1 && seats[i+1][j+1] === '#') occupied++;
  return occupied;
}

const findNearestSeat = (i, j, x, y, seats) => {
  let r = 1;
  while (true) {
    if (i + (r * x) < 0 || i + (r * x) >= seats.length) return [];
    if (j + (r * y) < 0 || j + (r * y) >= seats[0].length) return [];
    if (seats[i + (r * x)][j + (r * y)] !== '.') return [i + (r * x), j + (r * y)];
    r++;
  }
}

const checkNearestNeighbours = (i, j, seats) => {
  if (!nearestSeatMap[`${i}_${j}`]) {
    const mapEntry = [];
    mapEntry.push(findNearestSeat(i, j, -1, -1, seats));
    mapEntry.push(findNearestSeat(i, j, -1, 0, seats));
    mapEntry.push(findNearestSeat(i, j, -1, 1, seats));
    mapEntry.push(findNearestSeat(i, j, 0, -1, seats));
    mapEntry.push(findNearestSeat(i, j, 0, 1, seats));
    mapEntry.push(findNearestSeat(i, j, 1, -1, seats));
    mapEntry.push(findNearestSeat(i, j, 1, 0, seats));
    mapEntry.push(findNearestSeat(i, j, 1, 1, seats));
    nearestSeatMap[`${i}_${j}`] = mapEntry.filter(e => e.length > 0);
  }
  return nearestSeatMap[`${i}_${j}`].reduce((total, c) => total + (seats[c[0]][c[1]] === '#' ? 1 : 0), 0);
}

const part1 = (seats) => {
  let changes = -1;
  while (changes !== 0) {
    changes = 0;
    let map = [];
    for (let i = 0; i < seats.length; i++) {
      let row = '';
      for (let j = 0; j < seats[0].length; j++) {
        if (seats[i][j] === '.') {
          row += '.';
          continue;
        }
        const occupiedNeighbours = checkImmediateNeighbours(i, j, seats);
        if (seats[i][j] === 'L' && occupiedNeighbours === 0) {
          row += '#';
          changes++;
        } else if (seats[i][j] === '#' && occupiedNeighbours >= 4) {
          row += 'L';
          changes++;
        } else {
          row += seats[i][j];
        }
      }
      map.push(row);
    }
    seats = map;
  }
  console.log(seats.reduce((sum, row) => row.replace(/[^#]/g, '').length + sum, 0));
}

const part2 = (seats) => {
  let changes = -1;
  while (changes !== 0) {
    changes = 0;
    let map = [];
    for (let i = 0; i < seats.length; i++) {
      let row = '';
      for (let j = 0; j < seats[0].length; j++) {
        if (seats[i][j] === '.') {
          row += '.';
          continue;
        }
        const occupiedNeighbours = checkNearestNeighbours(i, j, seats);
        if (seats[i][j] === 'L' && occupiedNeighbours === 0) {
          row += '#';
          changes++;
        } else if (seats[i][j] === '#' && occupiedNeighbours >= 5) {
          row += 'L';
          changes++;
        } else {
          row += seats[i][j];
        }
      }
      map.push(row);
    }
    seats = map;
  }
  console.log(seats.reduce((sum, row) => row.replace(/[^#]/g, '').length + sum, 0));
}

module.exports = function (data) {
  let seats = data.replace(/\r/g, '').split(/\n/);
  part1([...seats]);
  part2([...seats]);
};