class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        const adjList: number[][] = Array.from({ length: numCourses }, () => []);
        const inDegree: number[] = new Array(numCourses).fill(0);

        for (const [course, prereq] of prerequisites) {
            adjList[prereq].push(course);
            inDegree[course]++;
        }

        const queue: number[] = [];

        for (let i = 0; i < numCourses; i++) {
            if (inDegree[i] === 0) queue.push(i);
        }

        let orderedCourse: number[] = [];
        let head = 0;

        while (head < queue.length) {
            const curr = queue[head++];
            orderedCourse.push(curr);
            const neighbors = adjList[curr];

            for (let neighbor of neighbors) {
                inDegree[neighbor]--;

                if (inDegree[neighbor] === 0) queue.push(neighbor);
            }
        }

        return orderedCourse.length === numCourses ? orderedCourse : [];
    }
}
