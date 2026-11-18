class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const n = s.length;

        if (n % 2 !== 0) return false;
        const stack: string[] = [];
        const closeToOpen: Map<string, string> = new Map([
            [")", "("],
            ["}", "{"],
            ["]", "["],
        ]);

        for (let i = 0; i < n; i++) {
            if (closeToOpen.has(s[i])) {
                if (stack.length > 0 && stack[stack.length - 1] === closeToOpen.get(s[i])) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(s[i]);
            }
        }

        return stack.length === 0;
    }
}
