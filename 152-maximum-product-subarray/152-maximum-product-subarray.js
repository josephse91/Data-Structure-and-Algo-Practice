/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = (nums) => {
    const isEmpty = nums.length === 0;
    if (isEmpty) return 0;

    return greedySearch(nums);/* Time O(N) */
};

const greedySearch = (nums) => {
    let min = max = product = nums[0];

    for (let num = 1; num < nums.length; num++) {/* Time O(N) */
        const [ minProduct, maxProduct ] = [ (min * nums[num]), (max * nums[num]) ];

        min = Math.min(maxProduct, minProduct, nums[num]);
        max = Math.max(maxProduct, minProduct, nums[num]);

        product = Math.max(product, max);
    }

    return product;
}

/* Concepts
If you deal with only positive numbers, you will consistently have a growing number. Only when negatives occur do you require logic.

To address this, at each cell we multiply the previous product and find the maximum AND the minimum product with the current number. 
- The minimum product is taken to be a possible largest magnitude for a following negative number. 
- The maximum product is taken because if the following number is positive, this would yield the highest number.

Once the products are found, we would need to declare the max and min between the current cell, minProduct and maxProduct.

*/