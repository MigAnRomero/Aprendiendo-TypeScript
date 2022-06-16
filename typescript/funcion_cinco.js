function operacion(x, y, func) {
    return func(x, y);
}
console.log(operacion(10, 4, function (x, y) { return x * y; }));
console.log(operacion(10, 5, function (x, y) { return x + y; }));
console.log(operacion(5, 4, function (x, y) { return x * y; }));
