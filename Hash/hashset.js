// 哈希集合
class MyHashSet {
    constructor(){
        this.base = 997;
        this.data = new Array(this.base).fill(0).map(()=>new Array());
    }
    add = function(key) {
        const idx = key%this.base;
        for(const ele of this.data[idx]) {
            if(ele === key) {
                return false;
            }
        }
        this.data[idx].push(key);
        return true;
    };
    remove = function(key) {
        const val = this.data[key%this.base];
        for(let i = 0;i<val.length;i++) {
            if(val[i] === key) {
                val.splice(i,1);
                return true;
            }
        }
        return false;
    };
    contains = function(key) {
        const val = this.data[key%this.base];
        for(let i = 0;i<val.length;i++) {
            if(val[i] === key) {
                return true;
            }
        }
        return false;
    };
};
/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */


// 哈希映射
class MyHashMap {
    constructor() {
        this.BASE = 769;
        this.data = new Array(this.BASE).fill(0).map(() => new Array());
    }
    put = function put(key, value){
        const h = this.hash(key);
        for (const it of this.data[h]) {
            if (it[0] === key) {
                it[1] = value;
                return;
            }
        }
        this.data[h].push([key, value]);
    }
    get(key){
        const h = this.hash(key);
        for (const it of this.data[h]) {
            if (it[0] === key) {
                return it[1];
            }
        }
        return -1;
    }
    remove(key){
        const h = this.hash(key);
        for (const it of this.data[h]) {
            if (it[0] === key) {
                const idx = this.data[h].indexOf(it);
                this.data[h].splice(idx, 1);
                return;
            }
        }
    }
    hash(key) {
        return key % this.BASE;
    }
}
