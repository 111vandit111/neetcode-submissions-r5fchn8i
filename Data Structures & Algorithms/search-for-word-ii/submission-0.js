
class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }

    addWords(word) {
        let curr = this;

        for (const c of word) {
            if (!curr.children[c]) {
                curr.children[c] = new TrieNode();
            }

            curr = curr.children[c];
        }

        curr.isEnd = true;
    }
}

class Solution {
    findWords(board, words) {
        if (!board.length || !board[0].length) return [];

        const root = new TrieNode();

        for (const word of words) {
            root.addWords(word);
        }

        const rows = board.length;
        const cols = board[0].length;

        const res = new Set();
        const visit = new Set();

        const dfs = (r, c, node, word) => {
            if (
                r < 0 || c < 0 ||
                r >= rows || c >= cols
            ) {
                return;
            }

            const key = `${r},${c}`;

            if (visit.has(key)) return;

            const char = board[r][c];

            if (!node.children[char]) return;

            visit.add(key);

            node = node.children[char];
            word += char;

            if (node.isEnd) {
                res.add(word);
            }

            dfs(r + 1, c, node, word);
            dfs(r - 1, c, node, word);
            dfs(r, c + 1, node, word);
            dfs(r, c - 1, node, word);

            visit.delete(key);
        };

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                dfs(r, c, root, "");
            }
        }

        return [...res];
    }
}