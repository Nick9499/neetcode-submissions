class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const adjList: number[][] = Array.from({length: numCourses},()=> []);
        const inDegree : number[] = new Array(numCourses).fill(0);

        for(const [courses,prereq] of prerequisites){
            adjList[prereq].push(courses);
            inDegree[courses]++;
        }

        const queue: number[] = [];

        for(let i=0;i<numCourses;i++){
            if(inDegree[i]===0) queue.push(i);
        }

        let completedCourse = 0;
        let head = 0;

        while(head<queue.length){
            const curr = queue[head++];
            completedCourse++;

            const neighbors = adjList[curr];

            for(const neighbor of neighbors){
                inDegree[neighbor]--

                if(inDegree[neighbor]===0) queue.push(neighbor);
            }

        }

        return completedCourse===numCourses;
    }
}
