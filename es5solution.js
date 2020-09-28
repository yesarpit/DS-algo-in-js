/*
Creating Trie in js

1) implement base class - root node
2) Insert in base
3) search in base
    . pre + post (has) search

*/
let root = function () {
    this.dict = {};
};


root.prototype.insert = function (a) {
    let that = this
    a.split("").map(e => {
        if (!that.dict[e]) {
            that.dict[e] = new root();
        }
        that = that.dict[e];
    })
}

root.prototype.search = function (a) {
    let that = this
    let found = true;
    const u = a.split("");
    // console.log('items',u[index],this.dict[u[index]]);
    let curr = this.dict;
    for (index in u) {
        console.log('curr[u[index]]',curr,index,u,curr[u[index]]);
        if(curr[u[index]]){
            curr=curr[u[index]].dict
        }else{
            return false
        }
        // if (curr.dict[u[index]] && curr.dict[u[index]]) {
        //     curr = curr[u[index]]
        // return true
        // } return false
    }
     return true
}

const yy = new root()
yy.insert("Arpit");
yy.insert("Arkit");
yy.insert("Axzx");
yy.insert("Bxzx");

console.log(yy.search("Bxzz"));
console.log(JSON.stringify(yy));