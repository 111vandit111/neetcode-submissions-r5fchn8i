class TrieNode{
    constructor(){
        this.children = {};
        this.isEnd = false;
    }
}

class WordDictionary {
    constructor() {
       this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;

        for(const c of word){
           if(!curr.children[c]) curr.children[c] = new TrieNode();
           curr = curr.children[c];
        }
        curr.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const dfs = (c, curr) => {
            if (!curr) return false;
            if(c === word.length){
                return curr.isEnd;
            }
            if(word[c] === "."){
                for (const child of Object.values(curr.children)) if (dfs(c + 1, child)) return true;
                return false;
            }
            if(!curr.children[word[c]]){
                return false;
            }else{
                curr = curr.children[word[c]];
                return dfs(c+1, curr);
            }
        }

        return dfs(0, this.root);
    }
}
