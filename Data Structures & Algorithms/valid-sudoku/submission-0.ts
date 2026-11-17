class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows: Map<number, Set<string>> = new Map();
        const cols: Map<number, Set<string>> = new Map();
        const squares: Map<string, Set<string>> = new Map();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === ".") continue;

                const sqKey = `${Math.floor(r / 3)}, ${Math.floor(c / 3)}`;

                if (
                    (rows.get(r) && rows.get(r).has(board[r][c])) ||
                    (cols.get(c) && cols.get(c).has(board[r][c])) ||
                    (squares.get(sqKey) && squares.get(sqKey).has(board[r][c]))
                ) {
                    return false;
                }

                if (!rows.has(r)) rows.set(r, new Set());
                if (!cols.has(c)) cols.set(c, new Set());
                if (!squares.has(sqKey)) squares.set(sqKey, new Set());

                rows.get(r).add(board[r][c]);
                cols.get(c).add(board[r][c]);
                squares.get(sqKey).add(board[r][c]);
            }
        }

        return true;
    }
}
