"use strict";
var GardenSimulator;
(function (GardenSimulator) {
    class GardenElement {
        position;
        size;
        constructor(_position, _size) {
            this.position = _position;
            this.size = _size;
        }
        isHit(_hitPosition) {
            let isElementHit = _hitPosition.x > this.position.x &&
                _hitPosition.x < this.position.x + this.size.x &&
                _hitPosition.y > this.position.y &&
                _hitPosition.y < this.position.y + this.size.y;
            return isElementHit;
        }
    }
    GardenSimulator.GardenElement = GardenElement;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=GardenElement.js.map