"use strict";
var GardenSimulator;
(function (GardenSimulator) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x = this.x * _factor;
            this.y = this.y * _factor;
        }
        scaleWithVector(_factorVector) {
            this.x = this.x * _factorVector.x;
            this.y = this.y * _factorVector.y;
        }
        add(_addend) {
            this.x = this.x + _addend.x;
            this.y = this.y + _addend.y;
        }
        subtract(_subtrahend) {
            this.x = this.x - _subtrahend.x;
            this.y = this.y - _subtrahend.y;
        }
    }
    GardenSimulator.Vector = Vector;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Vector.js.map