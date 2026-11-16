class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const resMap: Map<string, string[]> = new Map();

        for(let s of strs){
            const count: number[] = new Array(26).fill(0);
            for(let c of s){
                count[c.charCodeAt(0)- 'a'.charCodeAt(0)] +=1;

            }
            const key = count.join(',');

            if(!resMap.has(key)){
                resMap.set(key,[]);
            }

            resMap.get(key).push(s);
        }

        return Array.from(resMap.values());
    }
}
