class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges: number[][]): number[] {
        const N = edges.length;
        const graph: number[][] = Array.from({ length: N + 1 }, () => []);

        function hasPathBfs(source: number, target: number): boolean {
            const queue: number[] = [source];
            const visited = new Array(N + 1).fill(false);
            visited[source] = true;
            let head = 0;

            while (head < queue.length) {
                const curr = queue[head++];

                if (curr === target) return true;

                for (const neighbor of graph[curr]) {
                    if (!visited[neighbor]) {
                        visited[neighbor] = true;
                        queue.push(neighbor);
                    }
                }
            }

            return false;
        }

        for (const [u, v] of edges) {
            if (graph[u].length > 0 && graph[v].length > 0) {
                if (hasPathBfs(u, v)) {
                    return [u, v];
                }
            }
            graph[u].push(v);
            graph[v].push(u);
        }

        return [];
    }
}
