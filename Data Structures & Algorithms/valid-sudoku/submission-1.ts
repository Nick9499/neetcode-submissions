class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows: number[] = new Array(9).fill(0);
        const cols: number[] = new Array(9).fill(0);
        const square: number[] = new Array(9).fill(0);

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === ".") continue;

                const val = Number(board[r][c]) - 1;
                const mask = 1 << val;

                const sqIndx = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                if (
                    (rows[r] & mask) !== 0 ||
                    (cols[c] & mask) !== 0 ||
                    (square[sqIndx] & mask) !== 0
                ) {
                    return false;
                }

                rows[r] |= mask;
                cols[c] |= mask;
                square[sqIndx] |= mask;
            }
        }

        return true;
    }
}
