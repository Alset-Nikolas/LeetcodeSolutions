/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    var count_value = n
    
    return function() {

        return count_value++
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */