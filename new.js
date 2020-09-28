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
    search(Node, query) {
        let curr = Node

        const y = query.split("")

        //  y.forEach((c , index )=>{
        for (let index = 0; index <= query.length; index++) {
            var c = query[index]
            if (c === "?") {
                var sum = 0
                Object.values(curr.dict).forEach((child, i) => {
                    // console.log('~!@#$%^' ,,child);
                    sum = sum + this.search(child, query.slice(index + 1))

                })
                return sum
            }

            if (curr && curr.dict && Object.keys(curr.dict).includes(c)) {
                curr = curr.dict[c]
                if (c === "#") {
                    return 1
                }
            }
            else { return 0 }


        }
    }

}




const yy = new root()
yy.insert("cat#");
yy.insert("cap#");
yy.insert("cas#");
yy.insert("cax#");
yy.insert("caq#");
yy.insert("can#");
yy.insert("bat#");
yy.insert("pan#");
yy.insert("pen#");

console.log(yy.search(yy, "?a?#"));
console.log(JSON.stringify(yy));