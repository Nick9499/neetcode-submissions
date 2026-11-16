class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const countS: Map<string, number> = new Map();
        const countT: Map<string, number> = new Map();

        for (let i = 0; i < s.length; i++) {
            countS.set(s[i], (countS.get(s[i]) || 0) + 1);
            countT.set(t[i], (countT.get(t[i]) || 0) + 1);
        }

        for (const [char, count] of countS) {
            if (count !== countT.get(char)) return false;
        }

        return true;
    }
}
