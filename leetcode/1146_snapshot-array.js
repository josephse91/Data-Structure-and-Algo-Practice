// https://leetcode.com/problems/snapshot-array/

/* LESSON
The concept was to initiate an array up to a very large size. We must be able to log instances of the array 
and upon request be able to gather an element from one of the logged instances of the array

Solved? SUCCESS (refer to breakdowns at bottom)
Emphasised lessons:
- Be conscious about the input/return sizes. When dealing with arrays that are very large (>10000), you want to
make the time complexity linear or less

- If only one element is referenced within an array, a set or hashmap may be able to be used

*/
/* NAIVE FIRST ATTEMPT
Initialize an array of the given size. Have an empty array which would log each instance of an array by adding
the latest array into the snap array. When the data needs to be retrieved, call the respective index of the snap
array and reference within the array to find the requested index of that instance

Outcome: 
This works but does not fulfill the space complexity requirement. Because the array is able to be up to 50000 elements
it is very inefficient to log multiple full arrays. We need a way to refer to the log instances without shoveling the
full array
*/

/* SNAP OBJECT ATTEMPT 1
To solve the problem of the snaps array taking too much space, initialize a hash(object) that collects all of the indexes
that have been set. Once a snap is called, we will push the set object into the snap array. This way, the snap array will
not contain any excess elements that will not be changed.

In order to get a requested index within the desired snap_id, I iterated up to the desired snap_id and at each snap object
I iterated through each key in order to apply every change so that the array would reflect proper changes up to that snap.

Outcome:
By iterating through the keys, I was making a linear time complexity with the amount of sets called BUT this would be
a larger time complexity because it is also linear with the snaps taken.
The space complexity was solved but now the time complexity was at risk if there were too many operations
/*

/* SNAP OBJECT ATTEMPT 2 (FINAL ANSWER)
CONCEPT: If the requested output involves a single element that is independant of other elements, there is most likely
a solution available without initializing an array at any point. Using hashes or sets can be very useful.

I needed to improve upon Hash Attempt 1's linear space complexity with every set function call. To do this, rather than
iterating through each key of the snaps object, all I need to do is apply the desired key at each snap object. Thus the 
time complexity would be linear for the number of snaps BUT constant for the amount of sets.

Additionally, since I realized that I will only reference one element in the get function, there is no need for the entire array
at any point. I made a simple reference variable that would apply the sets at the desired index using the snap array of set objects
This reduces the space complexity to O(1) and the time complexity to O(n) where n is number of snaps.

/*
    @param {number} length
 */
var SnapshotArray = function (length) {
  this.latestSet = {};
  this.snaps = [];
};

function initiateArray(length) {
  let array = [];
  for (let i = 0; i < length; i++) {
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
SnapshotArray.prototype.set = function (index, val) {
  this.latestSet[index] = val;
  return;
  // return this;
};

/*
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
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
SnapshotArray.prototype.get = function (index, snap_id) {
  // this.array = Array.from(this.array,(el) => 0)
  let snaps = this.snaps;
  let getValue = 0;
  let selectValue;

  for (i = 0; i <= snap_id; i++) {
    let currentSnap = snaps[i];

    if (currentSnap[index] || currentSnap[index] === 0) {
      getValue = currentSnap[index];
    }
  }

  return (selectValue = !(getValue === null) ? getValue : null);
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
console.log(snapshotArr.snap()); // Take a snapshot, return snap_id = 0
console.log(snapshotArr.set(0, 1));
console.log(snapshotArr.snap());
console.log(snapshotArr.set(0, 0));
console.log(snapshotArr.snap());
console.log(snapshotArr.get(0, 2));
// console.log(snapshotArr.get(1,0));
// console.log(snapshotArr.set(1,3));
// console.log(snapshotArr.get(1,0));
// console.log(snapshotArr.set(0,5));
