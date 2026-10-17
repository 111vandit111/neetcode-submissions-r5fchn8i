class PrefixTree {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
         const recursion = (i, curr) => {
            if (i === word.length) {
                curr.isEnd = true;
                return;
            }

            const char = word[i];

            if (!curr.children[char]) {
                curr.children[char] = {
                    children: {},
                    isEnd: false
                };
            }

            recursion(i + 1, curr.children[char]);
        };

        recursion(0, this);
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const reccursion = (i,curr) => {
           if(i>=word.length) return false;
           if(curr.children[word[i]]){
            if(i===word.length-1){
                return curr.children[word[i]].isEnd;
            }else{
               return reccursion(i+1,curr.children[word[i]]);
            }
           }

           return false;
        }
       
        return  reccursion(0, this);
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(word) {
         const reccursion = (i,curr) => {
           if(i>=word.length) return false;
           if(curr.children[word[i]]){
            if(i===word.length-1){
                return true;
            }else{
               return reccursion(i+1,curr.children[word[i]]);
            }
           }
           return false;
        }
       
        return  reccursion(0, this);;
    }
}
