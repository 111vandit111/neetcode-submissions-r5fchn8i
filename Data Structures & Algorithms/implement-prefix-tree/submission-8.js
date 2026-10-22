class Trinode {
    constructor() {
        this.children = new Array(26);
        this.word_end_flag = false;
    }
}
class PrefixTree {
    constructor() {
        this.head = new Trinode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curNode = this.head;
        for (let i = 0; i < word.length; i++) {
            let normalized = word.charCodeAt(i) - 97;
            if (!curNode.children[normalized]) {
                curNode.children[normalized] = new Trinode();
            }
            curNode = curNode.children[normalized];
        }
        curNode.word_end_flag = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curNode = this.head;
        for (let i = 0; i < word.length; i++) {
            let normalized = word.charCodeAt(i) - 97;
            if (!curNode.children[normalized]) return false;
            curNode = curNode.children[normalized];
        }
        return curNode.word_end_flag;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curNode = this.head;
        for (let i = 0; i < prefix.length; i++) {
            let normalized = prefix.charCodeAt(i) - 97;
            if (!curNode.children[normalized]) {
                return false;
            }
            curNode = curNode.children[normalized];
        }
        return true;
    }
}
