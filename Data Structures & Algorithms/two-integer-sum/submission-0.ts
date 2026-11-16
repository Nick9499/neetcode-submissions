class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const n = nums.length;
        const indexMap: Map<number, number> = new Map();

        for(let i=0;i<n;i++){
            const diff = target - nums[i];

            if(indexMap.has(diff)) return [indexMap.get(diff), i]

            indexMap.set(nums[i],i);
        }
        return [];
    }
}
