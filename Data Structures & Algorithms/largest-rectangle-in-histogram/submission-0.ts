class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        const n = heights.length;
        const leftMost: number[] = new Array(n).fill(-1);
        const rightMost: number[] = new Array(n).fill(n);
        const stack: number[] = [];
        const top = () => stack[stack.length - 1];

        for (let i = 0; i < n; i++) {
            while (stack.length && heights[top()] >= heights[i]) {
                stack.pop();
            }

            if (stack.length) {
                leftMost[i] = top();
            }

            stack.push(i);
        }
        stack.length = 0;
        for (let i = n - 1; i >= 0; i--) {
            while (stack.length && heights[top()] >= heights[i]) {
                stack.pop();
            }

            if (stack.length) {
                rightMost[i] = top();
            }

            stack.push(i);
        }

        let maxArea = 0;

        for (let i = 0; i < n; i++) {
            leftMost[i] += 1;
            rightMost[i] -= 1;

            maxArea = Math.max(maxArea, heights[i] * (rightMost[i] - leftMost[i] + 1));
        }

        return maxArea;
    }
}
