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
        let l = 0,
            r = s.length - 1;

        while (l < r) {
            while (l < r && !this.isAlphaNum(s[l])) {
                l++;
            }

            while (r > l && !this.isAlphaNum(s[r])) {
                r--;
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }

            l++;
            r--;
        }

        return true;
    }
}
