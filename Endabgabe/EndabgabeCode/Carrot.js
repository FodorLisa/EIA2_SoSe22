"use strict";
var GardenSimulator;
(function (GardenSimulator) {
    class Carrot extends GardenSimulator.PlantedField {
        constructor(_position, _size) {
            super(_position, _size, 40, 90, 15, 20, 80, 10, 25, 3);
        }
        draw() {
            super.draw();
            GardenSimulator.crc2.save();
            GardenSimulator.crc2.translate(this.position.x, this.position.y);
            GardenSimulator.crc2.scale(this.size.x / 100, this.size.y / 100);
            // Karotte malen
            if (this.ageInDays < this.growthDurationInDays / 3) {
                // kleine Karotte
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(50, 94, 5, 0, 2 * Math.PI);
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.fillStyle = "#ed9121";
                GardenSimulator.crc2.fill();
            }
            else if (this.ageInDays < this.growthDurationInDays) {
                // mittlere Karotte
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.ellipse(60, 80, 5, 10, Math.PI / 3, 0, 2 * Math.PI);
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.fillStyle = "#ed9121";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.ellipse(40, 90, 5, 10, Math.PI / -3, 0, 2 * Math.PI);
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.fillStyle = "#ed9121";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(50, 75);
                GardenSimulator.crc2.lineTo(50, 100);
                GardenSimulator.crc2.closePath();
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(50, 96);
                GardenSimulator.crc2.lineTo(35, 87);
                GardenSimulator.crc2.lineWidth = 0.5;
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(50, 86);
                GardenSimulator.crc2.lineTo(65, 77);
                GardenSimulator.crc2.lineWidth = 0.5;
                GardenSimulator.crc2.stroke();
            }
            else {
                // große Karotte
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(50, 80);
                GardenSimulator.crc2.lineTo(40, 81);
                GardenSimulator.crc2.lineTo(46, 100);
                GardenSimulator.crc2.lineTo(58, 100);
                GardenSimulator.crc2.lineTo(65, 80);
                GardenSimulator.crc2.closePath();
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.fillStyle = "#ed9121";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(44, 76);
                GardenSimulator.crc2.lineTo(52, 82);
                GardenSimulator.crc2.lineTo(47, 70);
                GardenSimulator.crc2.closePath();
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.fillStyle = "#008000";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(60, 76);
                GardenSimulator.crc2.lineTo(52, 60);
                GardenSimulator.crc2.lineTo(53, 85);
                GardenSimulator.crc2.closePath();
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.fillStyle = "#008000";
                GardenSimulator.crc2.fill();
            }
            GardenSimulator.crc2.restore();
        }
    }
    GardenSimulator.Carrot = Carrot;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Carrot.js.map