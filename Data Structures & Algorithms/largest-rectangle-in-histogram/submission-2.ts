class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        const n = heights.length;
        const stack: number[] = [];
        const top = () => stack[stack.length - 1];
        let maxArea = 0;

        for (let i = 0; i <= n; i++) {
            while (stack.length && (i === n || heights[top()] >= heights[i])) {
                const height = heights[stack.pop()];
                const width = stack.length === 0 ? i : i - top() - 1;

                maxArea = Math.max(maxArea, height * width);
            }

            stack.push(i);
        }

        return maxArea;
    }
}
