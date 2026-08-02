/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    var mass = [];
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            mass.push(arr[i])
        }
    }
    return mass
};
