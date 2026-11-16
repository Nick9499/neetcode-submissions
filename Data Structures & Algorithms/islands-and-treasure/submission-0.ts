class Solution {
  /**
   * @param {number[][]} grid
   */

  public INF = 2147483647;
  islandsAndTreasure(grid: number[][]): void {
    if (!grid || grid.length === 0) return;
    const rows = grid.length;
    const cols = grid[0].length;
    const queue: [number, number][] = [];

    // 1. Init
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === 0) {
          queue.push([r, c]);
        }
      }
    }

    const directions = [
      [1, 0],
      [-1, 0],
      [0, -1],
      [0, 1],
    ];

    while (queue.length > 0) {
      const [r, c] = queue.shift()!;

      for (const [dr, dc] of directions) {
        const newRow = r + dr;
        const newCol = c + dc;

        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          grid[newRow][newCol] === this.INF
        ) {
          grid[newRow][newCol] = grid[r][c] + 1;
          queue.push([newRow, newCol]);
        }
      }
    }
  }
}
