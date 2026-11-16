class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let res = '';

        for(const s of strs){
            res+= `${s.length}#${s}`;
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const res: string[] = [];

        let i=0;

        while(i< str.length){
            let j = i;

            while(str[j]!=='#') j++;

            let len = parseInt(str.slice(i,j),10);
            let word = str.slice(j+1, j+1+len);
            res.push(word);

            i=j+len+1
        }

        return res;
    }
}
