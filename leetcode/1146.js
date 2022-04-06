// https://leetcode.com/problems/snapshot-array/

/*
    @param {number} length
 */
 var SnapshotArray = function(length) {
    this.array = initiateArray(length);
    this.latestSet = {}
    this.snaps = [];
};

function initiateArray(length) {
    let array = [];
    for(let i = 0; i < length; i++) {
        array.push(0);
    }
    return array;
}

// let array = new SnapshotArray(3);
// console.log(array)
/* 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.latestSet[index] = val;
    return
    // return this;
};

/*
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    this.snaps.push(this.latestSet);
    this.latestSet = Object.create({});
    return this.snaps.length - 1;
    // return this;
};

/*
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    // this.array = Array.from(this.array,(el) => 0)
    let snaps = this.snaps;
    let getValue = 0
    let selectValue

    for (i = 0; i <= snap_id; i++) {
        let currentSnap = snaps[i];

        if (!(currentSnap[index]) === null) {
            getValue = currentSnap[index];
        }
    }
    
    return selectValue = !(getValue === null) ? getValue : null;
};



/* 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */

snapshotArr = new SnapshotArray(1); // set the length to be 3
console.log(snapshotArr);
// console.log(snapshotArr.set(0,4));  // Set array[0] = 5
console.log(snapshotArr.snap());  // Take a snapshot, return snap_id = 0
console.log(snapshotArr.set(0,1));
console.log(snapshotArr.snap());
console.log(snapshotArr.set(0,0));
console.log(snapshotArr.snap());
console.log(snapshotArr.get(0,2));
// console.log(snapshotArr.get(1,0));
// console.log(snapshotArr.set(1,3));
// console.log(snapshotArr.get(1,0));
// console.log(snapshotArr.set(0,5));