class MaxHeap {
    constructor () {
        this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return idx * 2 + 1;
    }

    insert(val) {
        this.array.push(val);
     
        this.siftUp(this.array.length - 1);
    }

    siftUp(idx) {
        if (idx === 1) return;
        let parentIdx = this.getParent(idx);
        
        if (this.array[idx] > this.array[parentIdx]) {
        [ this.array[parentIdx], this.array[idx] ] = [ this.array[idx], this.array[parentIdx] ];
          this.siftUp(parentIdx);
        }
    }

    deleteMax() {
        // recall that we have an empty position at the very front of the array,
        // so an array length of 2 means there is only 1 item in the heap
       
        // if there is only 1 element in the heap, simply remove it
        if (this.array.length === 2) return this.array.pop();
       
        // if there are no elements in the heap, do nothing
        if (this.array.length === 1) return null;
       
        // otherwise remove the last element and make it the root at the front of the array
        let max = this.array[1];
        this.array[1] = this.array.pop();
       
        // then, sift the new root down to restore heap property
        this.siftDown(1);
        return max;
    }
       
    siftDown(idx) {
        let ary = this.array;
        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);
        let leftVal = ary[leftIdx];
        let rightVal = ary[rightIdx];
       
        // if the node is missing children, consider the missing children as the value -Infinity
        // this allows the node to keep heap property, since any value is greater than -Infinity
        // this will also give us children values to compare later, undefined should not be used for comparison**
        if (leftVal === undefined) leftVal = -Infinity;
        if (rightVal === undefined) rightVal = -Infinity;

        if (ary[idx] > leftVal && ary[idx] > rightVal) return;
       
        // if the node is bigger than both children, we have restored heap proper
        if (leftVal < rightVal) {
          var swapIdx = rightIdx;
        } else {
          var swapIdx = leftIdx;
        }
        [ ary[idx], ary[swapIdx] ] = [ ary[swapIdx], ary[idx] ];
       
        // and continue to sift it down recursively
        this.siftDown(swapIdx);
       
        // otherwise the node is bigger than one of it's children,
        // so swap this node with the bigger between the two children**
    }
}       

module.exports = {
    MaxHeap
};