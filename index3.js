function add(x, y) {
     if (typeof y === "undefined") { // partial
        return function (y) {
              return x + y;
        };
     }
   // full application
   return x + y;
}
console.log(add(4,6));   // Outputs 10
console.log(add(4)(6));  // Outputs 10

