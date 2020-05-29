/**
 * Creates a grid using the supplied dimensions
 *
 * @param {*} rows Number of rows in the Grid
 * @param {*} columns Number of columns in the Grid
 * @returns
 */
function createGrid(rows, columns) {
  let retVal = new Array(columns);
  for (let column = 0; column < columns; column++) {
    retVal[column] = new Array(rows).fill(0);
  }
  return retVal;
}

/**
 * Clones a grid
 *
 * @param {*} grid The grid to clone
 * @returns A deep-copy of the supplied grid
 */
function cloneGrid(grid) {
  const columns = grid.length;
  const rows = grid[0].length;
  let retVal = new Array(columns);
  for (let column = 0; column < columns; column++) {
    retVal[column] = new Array(rows);
    for (let row = 0; row < rows; row++) {
      retVal[column][row] = grid[column][row];
    }
  }
  return retVal;
}

/**
 * Seeds the specified grid with some starting data using the specified life ratio
 *
 * @param {*} grid The grid to seed
 * @param {number} [seed=50] The approximate percentage of life.
 */
function seedGrid(grid, seed = 50) {
  const columns = grid.length;
  const rows = grid[0].length;
  for (let column = 0; column < columns; column++) {
    for (let row = 0; row < rows; row++) {
      grid[column][row] = Math.floor(Math.random() * 100) < seed ? 1 : 0;
    }
  }
}

/**
 * Renders a grid to the specified context
 *
 * @param {*} grid The grid to render
 * @param {*} context HTML5 CanvasContext2D to render to
 */
function renderGrid(grid, context) {
  const columns = grid.length;
  const rows = grid[0].length;
  for (let column = 0; column < columns; column++) {
    for (let row = 0; row < rows; row++) {
      context.beginPath();
      context.rect(row, column, 1, 1);
      context.fillStyle = grid[column][row] ? 'black' : 'white';
      context.fill();
    }
  }
}

/**
 * Applies the rules using the supplied grid and returns the next itteration.
 *
 * @param {*} grid
 * @returns A new grid
 */
function step(grid) {
  const columns = grid.length;
  const rows = grid[0].length;
  let retVal = createGrid(rows, columns);
  for (let column = 1; column < columns - 1; column++) {
    for (let row = 1; row < rows - 1; row++) {
      let count = 0;

      count += grid[column][row - 1];
      count += grid[column - 1][row - 1];
      count += grid[column - 1][row + 1];
      count += grid[column][row + 1];
      count += grid[column - 1][row];
      count += grid[column + 1][row];
      count += grid[column + 1][row + 1];
      count += grid[column + 1][row - 1];

      if (count == 2 && grid[column][row] == 1) {
        retVal[column][row] = 1;
      } else if (count == 3) {
        retVal[column][row] = 1;
      } else {
        retVal[column][row] = 0;
      }
    }
  }
  return retVal;
}
