"use strict";
var GardenSimulator;
(function (GardenSimulator) {
    class Corn extends GardenSimulator.PlantedField {
        constructor(_position, _size) {
            super(_position, _size, 30, 80, 10, 20, 60, 10, 30, 6);
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
                GardenSimulator.crc2.fillStyle = "#FFFC3A";
                GardenSimulator.crc2.fill();
            }
            else if (this.ageInDays < this.growthDurationInDays) {
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.ellipse(60, 80, 5, 10, Math.PI / 3, 0, 2 * Math.PI);
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.fillStyle = "#FFFC3A";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.ellipse(40, 90, 5, 10, Math.PI / -3, 0, 2 * Math.PI);
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.fillStyle = "#FFFC3A";
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
                GardenSimulator.crc2.ellipse(58, 80, 5, 8, Math.PI / 3, 0, 2 * Math.PI);
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.fillStyle = "#cbff7c";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.ellipse(42, 70 + 20, 5, 8, Math.PI / -3, 0, 2 * Math.PI);
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.fillStyle = "#cbff7c";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(50, 68);
                GardenSimulator.crc2.lineTo(50, 100);
                GardenSimulator.crc2.closePath();
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(50, 96);
                GardenSimulator.crc2.lineTo(37, 87.5);
                GardenSimulator.crc2.lineWidth = 0.5;
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.moveTo(62, 78);
                GardenSimulator.crc2.lineTo(52, 85);
                GardenSimulator.crc2.lineWidth = 0.5;
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.beginPath();
                GardenSimulator.crc2.ellipse(50, 58, 5, 10, Math.PI / 1, 2, 3 * Math.PI);
                GardenSimulator.crc2.stroke();
                GardenSimulator.crc2.fillStyle = "#FFFC3A";
                GardenSimulator.crc2.fill();
                GardenSimulator.crc2.stroke();
            }
            GardenSimulator.crc2.restore();
        }
    }
    GardenSimulator.Corn = Corn;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Corn.js.map