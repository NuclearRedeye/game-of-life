class conwayGrid {
  constructor(xSize, ySize) {
    this.xSize = xSize;
    this.ySize = ySize;
    this.grid = Array();
    this.organismColour = ['green', 'red'];
    this.deadColour = 'red';
  }

  setGrid() {
    for (let i = 0; i < this.ySize; i++) {
      this.grid[i] = Array(this.xSize);
      for (let j = 0; j < this.xSize; j++) {
        let living = i % Math.floor(Math.random() * 10) == 0 ? 1 : 0;
        this.grid[i][j] = living;
      }
    }
  }

  getGrid() {
    return this.grid;
  }

  displayGrid() {
    let grid = document.getElementById('lifeGrid');
    let ctx = grid.getContext('2d');

    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        //console.log('sdfsdf')
        ctx.beginPath();
        ctx.rect(i, j, 1, 1);
        ctx.fillStyle = this.organismColour[this.grid[i][j]];
        ctx.fill();
      }
    }
  }

  tick() {
    console.log('tick');
    for (let i = 1; i < this.grid.length - 1; i++) {
      for (let j = 1; j < this.grid[i].length - 1; j++) {
        let count = 0;

        count += this.grid[i][j - 1];
        count += this.grid[i - 1][j - 1];
        count += this.grid[i - 1][j + 1];
        count += this.grid[i][j + 1];
        count += this.grid[i - 1][j];
        count += this.grid[i + 1][j];
        count += this.grid[i + 1][j + 1];
        count += this.grid[i + 1][j - 1];

        if (count == 2 && this.grid[i][j] == 1) {
          this.grid[i][j] = 1;
        } else if (count == 3) {
          this.grid[i][j] = 1;
        } else {
          this.grid[i][j] = 0;
        }
      }
    }

    this.displayGrid();
  }

  run(itterations) {
    setInterval(() => {
      this.tick();
    }, 10);
  }
}

class organism {
  constructor() {
    this.state = 'dead';
    //this.position = {x: 0, y: 0}
  }
}
