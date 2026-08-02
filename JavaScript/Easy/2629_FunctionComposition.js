
var compose = function(functions) {
    return function(x) {
        var value = x
        for ( var fi of functions.slice().reverse()){
            value = fi(value)
        }
        return value
        
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */