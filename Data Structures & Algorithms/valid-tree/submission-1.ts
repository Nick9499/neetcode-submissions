class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        if (edges.length !== n-1) return false;

        const adjList: number[][] = Array.from({ length: n }, () => []);

        for (const [u, v] of edges) {
            adjList[u].push(v);
            adjList[v].push(u);
        }

        let head = 0;
        const queue: number[] = [];
        const visited = new Set<number>();
        queue.push(0);
        visited.add(0);

        while (head < queue.length) {
            const curr = queue[head++];
            const neighbors = adjList[curr];

            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        return visited.size === n;
    }
}
