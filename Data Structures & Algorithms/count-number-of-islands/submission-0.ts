class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        if (!grid || grid.length === 0) return 0;

        let isLandCount = 0;
        const rows = grid.length;
        const cols = grid[0].length;

        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        function bfs(startRow: number, startCol: number) {
            const queue: [number, number][] = [];
            let head = 0;

            queue.push([startRow, startCol]);
            grid[startRow][startCol] = "0";

            while (head< queue.length) {
                const [r, c] = queue[head++];

                for (const [dr, dc] of directions) {
                    const newRow = r + dr;
                    const newCol = c + dc;

                    if (
                        newRow >= 0 &&
                        newRow < rows &&
                        newCol >= 0 &&
                        newCol < cols &&
                        grid[newRow][newCol] === "1"
                    ) {
                        grid[newRow][newCol] = "0";
                        queue.push([newRow, newCol]);
                    }
                }
            }
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === "1") {
                    isLandCount++;
                    bfs(r, c);
                }
            }
        }

        return isLandCount;
    }
}
