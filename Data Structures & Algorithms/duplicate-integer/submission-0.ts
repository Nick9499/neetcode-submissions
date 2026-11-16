class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const freqMap: Map<number, number> = new Map();
        const n = nums.length;

        for (let i = 0; i < n; i++) {
            if (freqMap.has(nums[i])) return true;

            freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1);
        }

        return false;
    }
}
