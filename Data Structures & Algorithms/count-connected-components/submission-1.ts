class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
       

        const adjList: number[][] = Array.from({ length: n }, () => []);
        let componentCount = 0;

        for (const [u, v] of edges) {
            adjList[u].push(v);
            adjList[v].push(u);
        }
        const visited = new Set<number>();

        function bfs(i: number) {
            const queue: number[] = [i];
            let head = 0;
            visited.add(i);

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
        }

        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                componentCount++;
                bfs(i);
            }
        }

        return componentCount;
    }
}
