class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
        const wordSet = new Set<string>(wordList);

        if (!wordSet.has(endWord)) return 0;

        const queue: [string, number][] = [[beginWord, 1]];
        const visited = new Set<string>();
        visited.add(beginWord);
        let head = 0;

        while (head < queue.length) {
            const [curr, lvl] = queue[head++];

            if (curr === endWord) return lvl;

            for (let i = 0; i < curr.length; i++) {
                const originalChar = curr[i];

                for (let c = 97; c <= 122; c++) {
                    const newChar = String.fromCharCode(c);

                    if (newChar === originalChar) continue;

                    const newWord = curr.substring(0, i) + newChar + curr.substring(i + 1);

                    if (wordSet.has(newWord) && !visited[newWord]) {
                        visited[newWord] = true;
                        queue.push([newWord, lvl + 1]);
                    }
                }
            }
        }

        return 0;
    }
}
