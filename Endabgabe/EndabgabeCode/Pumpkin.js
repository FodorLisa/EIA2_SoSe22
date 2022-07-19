"use strict";
var GardenSimulator;
(function (GardenSimulator) {
    class Pumpkin extends GardenSimulator.PlantedField {
        constructor(_position, _size) {
            super(_position, _size, 30, 90, 40, 20, 70, 10, 30, 5);
        }
        draw() {
            super.draw();
            GardenSimulator.crc2.save();
            GardenSimulator.crc2.translate(this.position.x, this.position.y);
            GardenSimulator.crc2.scale(this.size.x / 100, this.size.y / 100);
            if (this.ageInDays < this.growthDurationInDays / 3) {
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.arc(50, 94, 5, 0, 2 * Math.PI);
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.fillStyle = "#ff7518";
                GardenSimulator.crc2.fill();
            }
            else if (this.ageInDays < this.growthDurationInDays) {
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.ellipse(60, 80, 5, 10, Math.PI / 3, 0, 2 * Math.PI);
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.fillStyle = "#ff7518";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.ellipse(40, 90, 5, 10, Math.PI / -3, 0, 2 * Math.PI);
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.fillStyle = "#ff7518";
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
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.ellipse(50, 84, 20, 15, Math.PI / 16, 0, 2 * Math.PI);
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.fillStyle = "#ff7518";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(44, 66);
                GardenSimulator.crc2.lineTo(52, 72);
                GardenSimulator.crc2.lineTo(47, 60);
                GardenSimulator.crc2.closePath();
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.fillStyle = "#008000";
                GardenSimulator.crc2.fill();
            }
            GardenSimulator.crc2.restore();
        }
    }
    GardenSimulator.Pumpkin = Pumpkin;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Pumpkin.js.map