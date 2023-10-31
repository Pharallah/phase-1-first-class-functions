function receivesAFunction(cb) {
    return cb();
}

function returnsANamedFunction() {
    return function hello() {
    }
}

function returnsAnAnonymousFunction() {
    return function() {

    };
}