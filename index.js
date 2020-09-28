/*
Creating Trie in js

1) implement base class - root node
2) Insert in base
3) search in base
    . pre + post (has) search

*/
found = 0;
class root {
    constructor() {
        this.dict = {};

    }

    insert(a) {
        let that = this;
        a.split("").map(e => {
            if (!that.dict[e]) {
                that.dict[e] = new root();
            }
            that = that.dict[e];
        });
    }
    search(a, objToSearch) {
        const u = a.split("");
        let curr = objToSearch.dict;
        let wordArr = []
        u.forEach((e, index) => {
            if (e === "?") {
                Object.values(curr).forEach(y => {
                    //  this.search(a.slice(index + 1), y)
                    found += 1;
                })
            } else if (curr[e]) {
                curr = curr[e].dict;
                wordArr.push(Object.keys(curr))
                found += 1;
            }
            else {
                found = 0;
            }

        })
        console.log('wordArr',wordArr);
        return found
    }
}




const yy = new root()
yy.insert("cat");
yy.insert("cap");
// yy.insert("bat");
// yy.insert("pan");
// yy.insert("pen");

console.log(yy.search("cap", yy));
console.log(JSON.stringify(yy));