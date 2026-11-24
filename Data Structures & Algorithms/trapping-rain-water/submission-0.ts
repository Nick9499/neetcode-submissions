class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let n = height.length;
        if (!height || n === 0) return 0;

        let l = 0,
            r = n - 1,
            leftMax = height[l],
            rightMax = height[r],
            res = 0;

        while (l < r) {
            if (leftMax < rightMax) {
                l++;
                leftMax = Math.max(leftMax, height[l]);
                res += leftMax - height[l];
            } else {
                r--;
                rightMax = Math.max(height[r], rightMax);
                res += rightMax - height[r];
            }
        }

        return res;
    }
}
