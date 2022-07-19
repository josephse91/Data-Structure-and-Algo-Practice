
var TimeMap = function() {
    this.store = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (this.store[key]) {
        this.store[key][0].push(value);
        this.store[key][1].push(timestamp);
    } else {
        this.store[key] = [[value],[timestamp]]
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.store[key]) return ""
    let times = this.store[key][1];
    let values = this.store[key][0];
    
    let left = 0
    let right = times.length - 1;
    
    if (timestamp < times[0]) return ""
    if (times.length === 1) return values[0];
    if (times.length === 2) {
        if (times[right] <= timestamp) return values[right]
        if (times[left] <= timestamp) return values[left];
    }
    
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (times[mid] === timestamp) return values[mid];
        if (right - left === 1) return values[right];

        if (times[mid] < timestamp) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

/*
Get array
1) When there is one element, get the index of that element and apply it to the timestamp array
2) If left and right is equal, the mid point is equal. So if the mid point is not equal to the timestamp, use the index of the mid idx minus 1
3) Include the base cases for when the time/value array has 1 element and 2 elements
---- The base case when there are two elements are specific in this case because if there is no timestamp value, the next largest timestamp should be used.
*/