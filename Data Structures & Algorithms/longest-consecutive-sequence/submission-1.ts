class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numSet: Set<number> = new Set(nums);
        let longest = 0;

        for (let num of numSet) {
            if (!numSet.has(num - 1)) {
                let len = 1;
                while (numSet.has(num + len)) {
                    len++;
                }
                longest = Math.max(longest, len);
            }
        }
        return longest;
    }
}
