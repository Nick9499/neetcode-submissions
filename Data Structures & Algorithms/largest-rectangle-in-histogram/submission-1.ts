class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        const n = heights.length;
        const stack: number[][] = []; // pair: (index, height)
        const top = () => stack[stack.length - 1][1];
        let maxArea = 0;

        for (let i = 0; i < n; i++) {
            let start = i;

            while (stack.length > 0 && top() > heights[i]) {
                const [index, h] = stack.pop();
                maxArea = Math.max(maxArea, h * (i - index));
                start = index;
            }
            stack.push([start, heights[i]]);
        }

        for (const [i, h] of stack) {
            maxArea = Math.max(maxArea, h * (heights.length - i));
        }

        return maxArea;
    }
}
