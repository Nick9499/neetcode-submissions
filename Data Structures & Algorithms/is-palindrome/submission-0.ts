class Solution {
    isAlphaNum(char: string): boolean {
        return (
            (char >= "a" && char <= "z") ||
            (char >= "A" && char <= "Z") ||
            (char >= "0" && char <= "9")
        );
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let newStr = "";

        for (let c of s) {
            if (this.isAlphaNum(c)) {
                newStr += c.toLowerCase();
            }
        }

        return newStr === newStr.split("").reverse().join("");
    }
}
