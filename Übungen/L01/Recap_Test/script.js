"use strict";
var L01Variablen;
(function (L01Variablen) {
    let v = 1;
    v = v + "1";
    console.log(v);
    let students = [];
    students.push({ name: "Big Brain", matrikel: 123456, grades: { "EIA1": 1.3, "EIA2": 1.0 } });
    console.log();
    function isDivisible(_dividend, _divisor) {
        let result = (_dividend % _divisor == 0);
        return result;
    }
    console.log(isDivisible(3, 3));
    let v1 = 6;
    let v2 = 4;
    console.log(v2 = v1);
    let v3 = [1, 3, 4, 8];
    let v4 = 1;
    console.log(v4 = v3);
})(L01Variablen || (L01Variablen = {}));
//# sourceMappingURL=script.js.map