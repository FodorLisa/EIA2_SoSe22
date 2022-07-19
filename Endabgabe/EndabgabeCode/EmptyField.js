"use strict";
var GardenSimulator;
(function (GardenSimulator) {
    class EmptyField extends GardenSimulator.GardenElement {
        draw() {
            GardenSimulator.crc2.save();
            GardenSimulator.crc2.translate(this.position.x, this.position.y);
            GardenSimulator.crc2.scale(this.size.x / 100, this.size.y / 100);
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.rect(0, 0, 100, 100);
            GardenSimulator.crc2.fillStyle = "#BBA786";
            GardenSimulator.crc2.fill();
            GardenSimulator.crc2.restore();
        }
    }
    GardenSimulator.EmptyField = EmptyField;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=EmptyField.js.map